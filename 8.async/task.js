class AlarmClock{
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock (time, callback, id) {
        
        if (!id) {
            throw new Error ('Не указан id');
        }
        if (this.alarmCollection.some((item) => (item.timerId = id))) {
            console.error("уже есть будильник с таким id");
            return;
          } else {
            let clock = {
            timer: time,
            callbacker: callback,
            timeId: id,
            };
            this.alarmCollection.push(clock);
          }
        }

    removeClock (id) {
     if (this.alarmCollection.some((item) => (item.timeId = id))) {
        console.log("будильник будет удален");
        this.alarmCollection = this.alarmCollection.filter((item) => item.timeId !== id);
     } else {
        console.log("такого будильника нет");
     }
    }

    getCurrentFormattedTime () {
        const time = new Date();
        let hours = time.getHours();
        let mins = time.getMinutes();
        if (+hours < 10)
            hours = "0" + hours;
        if (+mins < 10)
            mins = "0" + mins;
        return hours + ":" + mins
    }

    start () {
        if (this.timerId === null)
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach( (value) => this.checkClock(value) )
            }, 1000);
    }

    checkClock(clock) {
        let curent = this.getCurrentFormattedTime();
    if ((clock.timer == curent)) {
      clock.callbacker();
    }
    if (this.alarmCollection.length === 0) {
      clearInterval(this.timerId)
        }
    }

    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms () {
        this.alarmCollection.forEach(alarm => {
        console.log(`Будильник №${alarm.id}, заведен на ${alarm.time}`)
        })
    }

    clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection = [];
    }
}
