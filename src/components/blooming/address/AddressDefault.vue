<template>
  <div
      class="address-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="address"
  >

    <div class="address-main-font">
      <p class="big_01">오시는 길</p>
      <span class="text_02">서울특별시 용산구 용산동 1가 8번지 <br/>로얄파크컨벤션 1층</span>
    </div>

    <div class="address-map">
      <div id="map" ref="map" style="width: 100%; height: 30vh;"></div>
    </div>

    <!-- 내비게이션 버튼을 마크업에서 미리 정의 -->
    <div class="address-nav-wrap">
      <div class="kakao-wrap">
        <div class="google-main">
          <button @pointerdown="startNavigation('google')" class="text_02">구글길안내</button>
        </div>
        <div class="kakao-main">
          <button @pointerdown="startNavigation('kakao')" class="text_02">카카오내비</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "addressDefault",
  data() {
    return {
      isVisible: false, // 애니메이션 트리거
      isEditing: false,
      editedSection: {}, // 수정된 데이터
      map: null, // 카카오맵 객체
      geocoder: null, // Geocoder 객체
      latitude: '',
      longitude: '',
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
    );

    observer.observe(this.$refs.address);
    this.$nextTick(() => {
      this.initKakaoMap();
    });
  },

  methods: {
    // 내비게이션 실행
    startNavigation(param) {
      console.log('??')
      const lat = this.latitude;  // 목적지 위도
      const lng = this.longitude; // 목적지 경도
      const name = '서울특별시 용산구 용산동 1가 8번지'    // 목적지 이름 (옵션)

      if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {

        if(param === 'kakao') {
          // 카카오 SDK가 로드되었는지 확인
          if (typeof window.Kakao !== 'undefined' && window.Kakao.Navi) {
            // 카카오 내비게이션 호출
            window.Kakao.Navi.start({
              name: name,            // 목적지 이름
              x: lng,                // 경도
              y: lat,                // 위도
              coordType: 'wgs84',    // 좌표 시스템 (WGS84)
            });
          } else {
            alert('카카오 내비 SDK가 로드되지 않았습니다.');
          }
        } else {
          const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
          window.location.href = googleMapsUrl;
        }
      } else {
        alert('모바일 기기에서만 내비게이션을 사용할 수 있습니다.');
      }
    },

    initKakaoMap() {
      const kakaoApiKey = import.meta.env.VITE_KAKAO_API_KEY;
      const script = document.createElement("script");
      // 카카오 SDK 는 직접 발급부탁드립니다.
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&autoload=false&libraries=clusterer,services&`;
      document.head.appendChild(script);
      script.onload = () => {
        kakao.maps.load(() => {
          const mapContainer = document.getElementById('map'); // 지도를 표시할 div
          const mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 6, // 지도의 확대 레벨
          };

          this.map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성

          // 주소-좌표 변환 객체를 생성합니다
          var geocoder = new kakao.maps.services.Geocoder();

          const param = '서울특별시 용산구 용산동 1가 8번지'

          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(param, function(result, status) {

            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {

              var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

              this.latitude = coords.getLat();  // 위도
              this.longitude = coords.getLng(); // 경도

              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new kakao.maps.Marker({
                map: this.map,
                position: coords
              });

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              this.map.setCenter(coords);
            }
          }.bind(this));
        });
      };
    },
  },
};
</script>
<style scoped>
.address-wrap {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease, transform 1.5s ease;
  justify-self: center;
  padding: 4.5rem 0 0;
  width: 100%;

  .address-main-font{
    padding: 0 0 2rem;
    text-align: center;
    span{
      white-space: nowrap;
      text-align: center;
      line-height: 2.5rem;
    }

    p{
      padding-bottom: 26px;
    }
  }

  .address-map {
    #map{
      border: 1px solid #eee;
    }
  }

  .animate-visible {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .address-nav-wrap{
    color: #555555;
    padding: 2.6rem 3rem 24px;
    position: relative;
    .kakao-wrap {
      width: 100%;
      .google-main {
        margin-bottom: 1.2rem;
        background-color: #fff1f3!important;
      }

      .google-main,
      .kakao-main{
        padding: 0.5rem 16px;
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        a {
          img {
            padding-top: 4px;
            width: 24px;
            height: 100%;
          }
        }

        button {
          height: 100%;
        }


        &:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
}

.address-wrap.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>