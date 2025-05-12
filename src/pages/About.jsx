import React from "react";
import { useTranslation } from "react-i18next";
import { FaMedal, FaHistory, FaUsers, FaIndustry } from "react-icons/fa";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">เกี่ยวกับเรา</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          บริษัท JSP METAL WORKS CO.,LTD เป็นผู้เชี่ยวชาญในการผลิตตู้ไฟฟ้าเปล่าคุณภาพสูง
          มากกว่า 15 ปี เรามุ่งมั่นพัฒนาผลิตภัณฑ์ที่ตอบโจทย์ความต้องการของลูกค้า
          ด้วยมาตรฐานและคุณภาพระดับสากล
        </p>
      </div>

      {/* Company Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <FaMedal className="text-primary text-5xl" />
          </div>
          <h2 className="text-2xl font-semibold mb-3">คุณภาพสูงสุด</h2>
          <p className="text-gray-600">
            เราใช้วัสดุคุณภาพสูงและกระบวนการผลิตที่ทันสมัย เพื่อให้มั่นใจว่าผลิตภัณฑ์ของเรา
            มีคุณภาพและความทนทานสูงสุด
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <FaHistory className="text-primary text-5xl" />
          </div>
          <h2 className="text-2xl font-semibold mb-3">ประสบการณ์</h2>
          <p className="text-gray-600">
            ด้วยประสบการณ์กว่า 15 ปีในอุตสาหกรรม ทำให้เราเข้าใจความต้องการของลูกค้า
            และสามารถให้คำแนะนำที่ดีที่สุดสำหรับการเลือกตู้ไฟฟ้า
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <FaUsers className="text-primary text-5xl" />
          </div>
          <h2 className="text-2xl font-semibold mb-3">ทีมงานมืออาชีพ</h2>
          <p className="text-gray-600">
            ทีมวิศวกรและช่างฝีมือที่มีความเชี่ยวชาญ พร้อมให้คำปรึกษาและแก้ไขปัญหา
            ตลอดกระบวนการผลิตและหลังการขาย
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="flex justify-center mb-4">
            <FaIndustry className="text-primary text-5xl" />
          </div>
          <h2 className="text-2xl font-semibold mb-3">มาตรฐานอุตสาหกรรม</h2>
          <p className="text-gray-600">
            ผลิตภัณฑ์ของเราได้รับการรับรองมาตรฐานอุตสาหกรรมระดับสากล
            เพื่อให้มั่นใจในความปลอดภัยและคุณภาพ
          </p>
        </div>
      </div>

      {/* Manufacturing Process */}
      <div className="bg-gray-100 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">กระบวนการผลิต</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3 text-primary">1. ออกแบบ</h3>
            <p className="text-gray-600">
              เราร่วมกับลูกค้าเพื่อออกแบบตู้ไฟฟ้าที่ตรงตามความต้องการใช้งาน
              โดยใช้เทคโนโลยี CAD ที่ทันสมัย เพื่อให้ได้แบบที่แม่นยำและมีประสิทธิภาพ
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3 text-primary">2. ผลิต</h3>
            <p className="text-gray-600">
              เราใช้เครื่องจักรที่ทันสมัยและทีมช่างผู้เชี่ยวชาญในการผลิตตู้ไฟฟ้า
              ตั้งแต่การตัด พับ เชื่อม และพ่นสี เพื่อให้ได้คุณภาพสูงสุด
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-3 text-primary">3. ตรวจสอบคุณภาพ</h3>
            <p className="text-gray-600">
              ทุกชิ้นส่วนผ่านการตรวจสอบคุณภาพอย่างเข้มงวด
              เพื่อให้มั่นใจว่าตู้ไฟฟ้าของเรามีความแข็งแรง ทนทาน และปลอดภัย
            </p>
          </div>
        </div>
      </div>

      {/* Materials Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">วัสดุคุณภาพสูง</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">เหล็กพ่นสีฝุ่น</h3>
            <p className="text-gray-600 mb-4">
              ใช้เหล็กคุณภาพสูง ผ่านกระบวนการพ่นสีฝุ่น (Powder Coating) ที่ช่วยป้องกันสนิม
              และทนต่อการกัดกร่อน เหมาะสำหรับการใช้งานทั่วไปและภายในอาคาร
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>ความหนาตั้งแต่ 1.0 - 2.0 มม.</li>
              <li>ป้องกันสนิมด้วยกระบวนการพ่นสีฝุ่นอีพ็อกซี่</li>
              <li>มาตรฐาน IP54 - IP65</li>
              <li>หลากหลายสีตามความต้องการ</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">สแตนเลส</h3>
            <p className="text-gray-600 mb-4">
              ใช้สแตนเลสเกรด 304 และ 316 ที่มีความทนทานต่อการกัดกร่อนสูง
              เหมาะสำหรับการใช้งานภายนอกอาคารหรือพื้นที่ที่มีความชื้นสูง
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>สแตนเลสเกรด 304 สำหรับการใช้งานทั่วไป</li>
              <li>สแตนเลสเกรด 316 สำหรับพื้นที่ที่มีการกัดกร่อนสูง</li>
              <li>ความหนาตั้งแต่ 1.0 - 2.0 มม.</li>
              <li>ทนต่อสภาพอากาศและสารเคมี</li>
              <li>อายุการใช้งานยาวนาน</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">มาตรฐานและการรับรอง</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">รูปใบรับรอง 1</span>
          </div>
          <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">รูปใบรับรอง 2</span>
          </div>
          <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">รูปใบรับรอง 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;