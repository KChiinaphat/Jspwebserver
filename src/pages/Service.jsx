import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaRuler, FaScrewdriver, FaShieldAlt, FaTruck, FaHandshake, FaWrench } from "react-icons/fa";

function Service() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">บริการของเรา</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          เรามุ่งมั่นให้บริการที่ครบวงจรเกี่ยวกับตู้ไฟฟ้าเปล่า ตั้งแต่การออกแบบ ผลิต จัดส่ง
          และบริการหลังการขาย เพื่อตอบสนองความต้องการของลูกค้าอย่างมีประสิทธิภาพ
        </p>
      </div>

      {/* Main Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-primary text-white p-6 flex justify-center">
            <FaRuler className="text-6xl" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3">ออกแบบตู้ไฟฟ้าตามความต้องการ</h2>
            <p className="text-gray-600 mb-4">
              เรามีทีมวิศวกรผู้เชี่ยวชาญพร้อมให้คำปรึกษาและออกแบบตู้ไฟฟ้าที่เหมาะสมกับการใช้งาน
              โดยคำนึงถึงความปลอดภัยและประสิทธิภาพสูงสุด
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-6">
              <li>ออกแบบตามขนาดที่ต้องการ</li>
              <li>ออกแบบตามมาตรฐานความปลอดภัย</li>
              <li>แนะนำวัสดุที่เหมาะกับการใช้งาน</li>
              <li>เขียนแบบด้วย CAD เพื่อความแม่นยำ</li>
            </ul>
            <Link to="/contact">
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-focus w-full">
                ขอใบเสนอราคา
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-primary text-white p-6 flex justify-center">
            <FaScrewdriver className="text-6xl" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3">ผลิตตู้ไฟฟ้าคุณภาพสูง</h2>
            <p className="text-gray-600 mb-4">
              ใช้เครื่องจักรที่ทันสมัยและทีมช่างผู้เชี่ยวชาญในการผลิตตู้ไฟฟ้า
              จากวัสดุคุณภาพสูง ทั้งเหล็กและสแตนเลส
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-6">
              <li>ตู้ไฟฟ้าเหล็กพ่นสีฝุ่น</li>
              <li>ตู้ไฟฟ้าสแตนเลส</li>
              <li>ตู้คอนโทรล และตู้ MDB</li>
              <li>ตู้ไฟฟ้าสำหรับงานเฉพาะทาง</li>
            </ul>
            <Link to="/product">
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-focus w-full">
                ดูสินค้าของเรา
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-primary text-white p-6 flex justify-center">
            <FaShieldAlt className="text-6xl" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3">รับรองมาตรฐานความปลอดภัย</h2>
            <p className="text-gray-600 mb-4">
              ตู้ไฟฟ้าของเราผ่านการตรวจสอบและทดสอบตามมาตรฐานอุตสาหกรรม
              เพื่อรับรองความปลอดภัยและคุณภาพ
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-6">
              <li>มาตรฐาน IP54, IP65</li>
              <li>มาตรฐาน NEMA</li>
              <li>มาตรฐานอุตสาหกรรม (มอก.)</li>
              <li>ทดสอบการทนต่อแรงกระแทกและการกัดกร่อน</li>
            </ul>
            <Link to="/about">
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-focus w-full">
                เกี่ยวกับมาตรฐานของเรา
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <div className="flex justify-center mb-4">
            <FaTruck className="text-primary text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">บริการจัดส่ง</h3>
          <p className="text-gray-600">
            เรามีบริการจัดส่งทั่วประเทศ โดยทีมงานมืออาชีพ 
            พร้อมประกันความเสียหายระหว่างการขนส่ง เพื่อให้สินค้าถึงมือลูกค้าอย่างปลอดภัย
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <div className="flex justify-center mb-4">
            <FaHandshake className="text-primary text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">ให้คำปรึกษา</h3>
          <p className="text-gray-600">
            ทีมวิศวกรของเราพร้อมให้คำปรึกษาเกี่ยวกับการเลือกใช้ตู้ไฟฟ้าที่เหมาะสมกับการใช้งาน
            ทั้งด้านขนาด วัสดุ และมาตรฐานความปลอดภัย
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <div className="flex justify-center mb-4">
            <FaWrench className="text-primary text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">บริการหลังการขาย</h3>
          <p className="text-gray-600">
            เรามีทีมบริการหลังการขายที่พร้อมให้ความช่วยเหลือและแก้ไขปัญหา
            รวมถึงการรับประกันสินค้าทุกชิ้นเพื่อความมั่นใจของลูกค้า
          </p>
        </div>
      </div>

      {/* Types of Electrical Cabinets */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">ประเภทตู้ไฟฟ้าที่เรารับผลิต</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4 items-start">
            <div className="bg-primary text-white p-3 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">ตู้ MDB (Main Distribution Board)</h3>
              <p className="text-gray-600">
                ตู้จ่ายไฟฟ้าหลักที่รับไฟฟ้าจากแหล่งจ่ายไฟและกระจายไปยังวงจรย่อยต่างๆ
                สามารถผลิตได้ตามขนาดและมาตรฐานที่ต้องการ
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-primary text-white p-3 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">ตู้ DB (Distribution Board)</h3>
              <p className="text-gray-600">
                ตู้จ่ายไฟฟ้าย่อยที่รับไฟฟ้าจาก MDB และจ่ายไปยังอุปกรณ์ไฟฟ้าต่างๆ
                มีขนาดเล็กกว่า MDB และติดตั้งในแต่ละพื้นที่
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-primary text-white p-3 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">ตู้ MCC (Motor Control Center)</h3>
              <p className="text-gray-600">
                ตู้ควบคุมมอเตอร์ที่รวมอุปกรณ์ควบคุมมอเตอร์ไว้ในที่เดียวกัน
                เหมาะสำหรับโรงงานอุตสาหกรรมที่มีมอเตอร์หลายตัว
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-primary text-white p-3 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">ตู้ PLC (Programmable Logic Controller)</h3>
              <p className="text-gray-600">
                ตู้ควบคุมระบบอัตโนมัติที่ใช้ PLC ในการควบคุมการทำงาน
                เหมาะสำหรับระบบอัตโนมัติในโรงงานและอาคาร
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-primary text-white p-3 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">ตู้ ATS (Automatic Transfer Switch)</h3>
              <p className="text-gray-600">
                ตู้สวิตช์โอนถ่ายอัตโนมัติที่สลับแหล่งจ่ายไฟฟ้าหลักและสำรองโดยอัตโนมัติ
                เพื่อความต่อเนื่องของระบบไฟฟ้า
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-primary text-white p-3 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">ตู้ไฟฟ้าสำหรับงานเฉพาะทาง</h3>
              <p className="text-gray-600">
                ตู้ไฟฟ้าที่ออกแบบเฉพาะสำหรับการใช้งานพิเศษ เช่น ตู้กันน้ำ, ตู้กันระเบิด,
                ตู้สำหรับงานกลางแจ้ง หรือพื้นที่พิเศษอื่นๆ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">เสียงตอบรับจากลูกค้า</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "ตู้ไฟฟ้าที่ได้รับมีคุณภาพดีเยี่ยม ทนทาน และการทำงานร่วมกับทีมงานของ JSP เป็นไปอย่างราบรื่น
              ประทับใจในการให้บริการและคำปรึกษาตลอดโครงการ"
            </p>
            <h4 className="font-semibold text-center">บริษัท เอบีซี จำกัด</h4>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "ทีมวิศวกรให้คำแนะนำที่เป็นประโยชน์มาก ทำให้เราเลือกตู้ไฟฟ้าที่เหมาะสมกับการใช้งานได้อย่างถูกต้อง
              สินค้ามีคุณภาพดีและส่งตรงเวลา"
            </p>
            <h4 className="font-semibold text-center">บริษัท XYZ อินดัสทรี</h4>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "ใช้บริการมาหลายปี ไม่เคยผิดหวัง ตู้ไฟฟ้าคุณภาพดี ทนทาน และทีมบริการหลังการขายตอบสนองรวดเร็ว
              เป็นพาร์ทเนอร์ที่ไว้วางใจได้"
            </p>
            <h4 className="font-semibold text-center">บริษัท 123 เอ็นจิเนียริ่ง</h4>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-white p-10 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">พร้อมให้บริการคุณ</h2>
        <p className="text-xl mb-6">
          มีคำถามหรือต้องการใบเสนอราคา? ติดต่อเราได้วันนี้เพื่อรับการปรึกษาฟรี
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact">
            <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
              ติดต่อเรา
            </button>
          </Link>
          <Link to="/product">
            <button className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold">
              ดูสินค้าของเรา
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;