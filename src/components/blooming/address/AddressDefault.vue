<template>
  <div
      class="address-wrap"
      :class="{ 'animate-visible': isVisible }"
      ref="address"
  >

    <div class="address-main-font">
      <p>오시는 길</p>
      <span>서울특별시 용산구 용산동 1가 8번지</span><br/>
      <span>로얄파크컨벤션 1층</span>
    </div>

    <div class="address-map">
      <div id="map" ref="map" style="width: 100%; height: 245px;"></div>
    </div>

    <!-- 내비게이션 버튼을 마크업에서 미리 정의 -->
    <div class="address-nav-wrap">
      <div class="kakao-wrap">
        <div class="kakao-main">
          <a id="start-navigation" @click="startNavigation('kakao')">
            <img src="https://developers.kakao.com/assets/img/about/buttons/navi/kakaonavi_btn_medium.png"
                 alt="길 안내하기 버튼" />
          </a>
          <button @click="startNavigation('kakao')">카카오내비</button>
        </div>
        <div class="google-main">
          <a @click="startNavigation('google')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28.5" viewBox="0 0 48 48" fill="none">
              <path fill="#EA4335" d="M24 9.5c3.9 0 7.2 1.4 9.8 3.6l7.3-7.3C36.8 2 30.8 0 24 0 14.9 0 6.8 4.9 2.4 12.1l8.7 6.7C13.6 12.5 18.4 9.5 24 9.5z" />
              <path fill="#34A853" d="M46.6 24.5c0-1.4-.1-2.7-.4-4H24v8h12.6c-.5 2.5-1.9 4.7-3.8 6.1l8.7 6.7c5-4.7 7.9-11.5 7.9-19.8z" />
              <path fill="#FBBC05" d="M10.9 28.8C9.7 25.7 9.7 22.3 10.9 19.2l-8.7-6.7C0.7 16.3 0 20.1 0 24s.7 7.7 2.2 11.5l8.7-6.7z" />
              <path fill="#4285F4" d="M24 48c6.5 0 12-2.1 16.1-5.8l-8.7-6.7c-2.3 1.5-5.3 2.5-8.4 2.5-5.6 0-10.5-3-13-7.4l-8.7 6.7C6.8 43.1 14.9 48 24 48z" />
            </svg>
          </a>
          <button @click="startNavigation('google')">구글길안내</button>
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
      const script = document.createElement("script");
      script.src = "http://dapi.kakao.com/v2/maps/sdk.js?appkey=7a00e839ba07cfb660f1cfc019bdd08b&autoload=false&libraries=clusterer,services&";
      document.head.appendChild(script);
      script.onload = () => {
        kakao.maps.load(() => {
          const mapContainer = document.getElementById('map'); // 지도를 표시할 div
          const mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 4, // 지도의 확대 레벨
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

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              // var infowindow = new kakao.maps.InfoWindow({
              //   content: '<div style="width:50px;text-align:center;padding:2px 0; color: black">예식장</div>'
              // });
              // infowindow.open(this.map, marker);

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
/* 애니메이션 */
.address-wrap {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease, transform 1.5s ease;
  justify-self: center;
  padding: 0 0 42px;
  width: 100%;

  .address-main-font{
    padding: 0 0 42px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    span{
      color: #6a6a6a;
      white-space: nowrap;
      line-height: 1.8;

    }

    p{
      padding-bottom: 12px;
      color:  #191c21;
      font-size: 21px;
      font-weight: 700;
    }
  }

  .address-map {
    #map{
      border: 1px solid #b0b0b0;
    }
  }

  .address-nav-wrap{
    color: black;
    padding: 24px 24px;
    position: relative;
    .kakao-wrap {
      font-size: 14px;
      gap: 12px;
      width: 100%;
      align-items: center;
      justify-content: center;
      display: flex;

      .google-main,
      .kakao-main{
        border: 1px solid #b0b0b0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        border-radius: 8px;
        padding: 0 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        transition: transform 0.2s ease, box-shadow 0.2s ease; /* 부드러운 애니메이션 */

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
          transform: scale(1.05); /* 살짝 커지게 설정 */
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* 그림자 강화 */
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