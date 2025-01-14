<template>
  <div class="calendar-wrap-sub">
    <!-- 상단 월/연도 변경 -->
    <div class="calendar-header">
      <p>{{ countdown }}</p>
      <!--      <button @click="prevMonth">◀</button>-->
      <!--        <span>{{ currentYear }}년 {{ currentMonth + 1 }}월</span>-->
      <!--      <button @click="nextMonth">▶</button>-->
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

      this.countdown = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남음`;
    },
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear -= 1;
      } else {
        this.currentMonth -= 1;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear += 1;
      } else {
        this.currentMonth += 1;
      }
    },
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
  font-family: Arial, sans-serif;
  text-align: center;
}

.calendar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-weight: 500;
  font-size: 18px;
  span{
    color: #191c21;
  }
  p{
    font-size: 14px;
    padding: 12px 0;
    font-weight: 400;
    font-style: italic;
    color: #FF91A4;
  }
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.calendar-day {
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
}

.calendar-day.header {
  font-weight: bold;
}

.calendar-day.current-date {
  background-color: #E57373;
  color: #FFFFFF;
  font-weight: 500;
  border-radius: 999px;
}

</style>