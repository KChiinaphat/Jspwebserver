function AboutUs() {
    return (
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary">เกี่ยวกับเรา</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            บริษัทของเรามุ่งเน้นการผลิตตู้ไฟฟ้าที่มีคุณภาพสูง ครอบคลุมทั้งงานเหล็ก สแตนเลส และวัสดุพิเศษ โดยคำนึงถึงความต้องการของลูกค้าเป็นหลัก
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-base-100 shadow-lg p-6 rounded-box">
            <h2 className="text-2xl font-semibold mb-2">ประสบการณ์</h2>
            <p>
              เรามีประสบการณ์ในวงการอุตสาหกรรมการผลิตตู้ไฟฟ้ามากกว่า 15 ปี โดยทีมช่างผู้เชี่ยวชาญที่เข้าใจในมาตรฐานและความปลอดภัย
            </p>
          </div>
  
          <div className="bg-base-100 shadow-lg p-6 rounded-box">
            <h2 className="text-2xl font-semibold mb-2">วิสัยทัศน์</h2>
            <p>
              เป็นผู้นำด้านการออกแบบและผลิตตู้ไฟฟ้าที่ตอบโจทย์การใช้งานทั้งภายในประเทศและต่างประเทศ ด้วยนวัตกรรมและเทคโนโลยีสมัยใหม่
            </p>
          </div>
  
          <div className="bg-base-100 shadow-lg p-6 rounded-box">
            <h2 className="text-2xl font-semibold mb-2">วัสดุและมาตรฐาน</h2>
            <p>
              เราคัดสรรวัสดุคุณภาพสูง เช่น เหล็กพ่นสีฝุ่น สแตนเลสเกรด 304 เพื่อให้มั่นใจในความทนทานและความสวยงามของผลิตภัณฑ์
            </p>
          </div>
  
          <div className="bg-base-100 shadow-lg p-6 rounded-box">
            <h2 className="text-2xl font-semibold mb-2">บริการหลังการขาย</h2>
            <p>
              เราใส่ใจลูกค้าทุกขั้นตอน พร้อมให้คำปรึกษาและบริการหลังการขายอย่างมืออาชีพ เพื่อความพึงพอใจสูงสุดของลูกค้า
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutUs;