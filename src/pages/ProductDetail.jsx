import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  if (!product) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  // ข้อมูลแท็บต่างๆ (ในระบบจริงควรมาจาก API)
  const tabs = {
    features: {
      title: "คุณสมบัติสำคัญ",
      content: product.features || "ยังไม่มีข้อมูลคุณสมบัติสำหรับผลิตภัณฑ์นี้"
    },
    manufacturing: {
      title: "กระบวนการผลิต",
      content: product.manufacturing_process || "ยังไม่มีข้อมูลกระบวนการผลิตสำหรับผลิตภัณฑ์นี้"
    },
    specifications: {
      title: "ข้อมูลทางเทคนิค",
      content: product.specifications || "ยังไม่มีข้อมูลทางเทคนิคสำหรับผลิตภัณฑ์นี้"
    },
    application: {
      title: "การนำไปใช้งาน",
      content: product.applications || "ยังไม่มีข้อมูลการนำไปใช้งานสำหรับผลิตภัณฑ์นี้"
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 py-8">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* ส่วนหัว */}
        <div className="md:flex">
          <div className="md:w-1/3 p-4">
            <img 
              src={product.image_url} 
              alt={product.products_name} 
              className="w-full rounded-lg shadow-md" 
            />
          </div>
          
          <div className="md:w-2/3 p-6">
            <div className="flex items-center mb-2">
              <h1 className="text-3xl font-bold text-gray-800">{product.products_name}</h1>
              <span className="ml-3 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                รุ่น {product.model || "N/A"}
              </span>
            </div>
            
            <p className="text-lg text-gray-600 mb-4">{product.products_description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags && product.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* แท็บการนำทาง */}
        <div className="border-t border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {Object.keys(tabs).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${
                  activeTab === tabKey
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tabs[tabKey].title}
              </button>
            ))}
          </div>
        </div>

        {/* เนื้อหาแท็บ */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">{tabs[activeTab].title}</h2>
          {activeTab === "features" && (
            <div className="space-y-4">
              {Array.isArray(product.featuresList) ? (
                product.featuresList.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">{tabs[activeTab].content}</p>
              )}
            </div>
          )}

          {activeTab === "manufacturing" && (
            <div className="space-y-4">
              {Array.isArray(product.manufacturingSteps) ? (
                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
                  {product.manufacturingSteps.map((step, index) => (
                    <div key={index} className="mb-8 flex">
                      <div className="flex-shrink-0 bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center z-10 text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-medium">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">{tabs[activeTab].content}</p>
              )}
            </div>
          )}

          {activeTab === "specifications" && (
            <div className="overflow-x-auto">
              {product.specTable ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">คุณสมบัติ</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ค่า</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Object.entries(product.specTable).map(([key, value], index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-600">{tabs[activeTab].content}</p>
              )}
            </div>
          )}

          {activeTab === "application" && (
            <div className="grid md:grid-cols-2 gap-6">
              {Array.isArray(product.applicationAreas) ? (
                product.applicationAreas.map((app, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">{app.title}</h3>
                    <p className="text-gray-600">{app.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">{tabs[activeTab].content}</p>
              )}
            </div>
          )}
        </div>

        {/* ส่วนท้าย */}
        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <h2 className="text-xl font-bold mb-4">ต้องการข้อมูลเพิ่มเติม?</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              ดาวน์โหลดเอกสาร
            </button>
            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              ติดต่อฝ่ายเทคนิค
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;