<template>
  <div class="calendar-wrap-sub">
    <!-- 상단 월/연도 변경 -->
    <div class="calendar-header">
      <h2>2025년 2월 8일</h2>
    </div>

    <!-- 요일 헤더 -->
    <div class="calendar-grid">
      <div v-for="day in daysOfWeek" :key="day" class="calendar-day header"
      :style="day === '일' ? 'color:red;!important' : 'color:black'">
        {{ day }}
      </div>

      <!-- 날짜 -->
      <div
          v-for="(date, index) in calendarDays"
          :key="index"
          class="calendar-day"
          style="color:black;"
          :class="{ 'current-date': isSelectedDate(date) }"
      >
        <span v-if="date" :style="isSelectedDate(date) ? 'color:#fff':''">{{ date }}</span>
      </div>
    </div>

    <div class="calender-footer">
      <div class="calender-main-font">
        <p>2025년 02월 08일 토요일 오후 01시 00분</p>
        <span>{{ countdown }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calenderTemplate",
  props:{
    days:{
      type: String,
      default: () => {
        const today = new Date();
        return `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`;
      },
    }
  },
  data() {
    return {
      daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"], // 요일
      currentYear: null,
      currentMonth: null,
      selectedDate: null,
      targetDate: new Date('2025-01-04T00:00:00'), // 목표 날짜 (타임존에 맞춰 설정)
      countdown: '',
    };
  },
  created() {
    // 타이머 업데이트를 매 초마다 실행
    setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    // 컴포넌트가 파괴되기 전에 타이머를 정리
    clearInterval(this.interval);
  },
  computed: {
    calendarDays() {
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay(); // 해당 달 1일의 요일
      const lastDate = new Date(this.currentYear, this.currentMonth + 1, 0).getDate(); // 해당 달 마지막 날짜
      const days = [];

      // 첫 주 빈칸 채우기
      for (let i = 0; i < firstDay; i++) {
        days.push(null);
      }

      // 해당 달의 날짜 추가
      for (let i = 1; i <= lastDate; i++) {
        days.push(i);
      }

      return days;
    },
  },
  mounted() {
    // props로 전달된 날짜 파싱
    const [year, month, day] = this.days.split(".").map(Number);
    this.currentYear = year;
    this.currentMonth = month - 1; // 월은 0부터 시작하므로 -1
    this.selectedDate = day;
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const tmp = this.days.replaceAll('.','-') + 'T00:00:00'
      const diff = new Date(tmp) - now;

      if (diff <= 0) {
        this.countdown = '우리의 결혼생활이 시작됐습니다!';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // this.countdown = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남음`;
      this.countdown = `충디딥 ❤️ 유디딥의 결혼식이 ${days}일 남음`;    },
    isSelectedDate(date) {
      if (!date) return false;

      const [year, month, day] = this.days.split(".").map(Number);
      return (
          this.currentYear === year &&
          this.currentMonth === month - 1 &&
          date === day
      );
    },
  },
};
</script>

<style scoped lang="scss">
.calendar-wrap-sub {
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
}

.calendar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  color: black;
  h2{
    font-weight: 500;
    font-size: 19px;
    padding-bottom: 12px;
  }
}

.calendar-grid {
  padding: 34px 0;
  display: grid;
  border-top: 0.6px solid #b0b0b0;
  border-bottom: 0.6px solid #b0b0b0;
  grid-template-columns: repeat(7, 1fr);
  gap: 11px;
}

.calendar-day {
  padding: 9px;
  text-align: center;
  font-size: 14px;
  border-radius: 8px;
}

.calendar-day.header {
  font-weight: 700;
}

.calendar-day.header:nth-child(7) {
  color: red;
}

.calendar-day.current-date {
  background-color: #ff91a4;
  color: #FFFFFF;
  font-weight: 500;
  border-radius: 999px;
}

.calender-footer {
  padding-top: 34px;
  color: #b0b0b0;
  text-align: left;

  .calender-main-font {
    font-size: 16px;
    color: #333;

    p {
      font-weight: 600;
      padding-bottom: 16px;
    }

    span {
      font-size: 14px;
      color: #ff6347;
      font-weight: 700;
    }
  }
}

</style>