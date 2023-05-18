const mongoose = require('mongoose')

let changTimezone = Date.now()+25200000 //ใช้คำสั่ง Date.now ดึงเวลาปัจจุบันมาเป็น มิลลิวินาที แล้วนำมาบวกเพิ่ม 7 ชม
let thaiTimezone = new Date(changTimezone) //สร้างตัวแปลรับ Date ของโซนประเทศไทย

module.exports = mongoose.model('Employee', {
    name: { type: String },
    age: { type: Number },
    updated_at: { type: Date, default: thaiTimezone },
})