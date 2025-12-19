function ServiceCard({ service }) {
  return (
    <div className="border rounded-xl bg-white  p-4 shadow-sm hover:shadow-md transition">
      <h4 className="font-semibold">
        {service.serviceName}
      </h4>

      <p className="text-sm text-gray-500 ">
        📞 {service.phone}
      </p>

      <p className="text-sm text-blue-600 mt-1">
        IVR: {service.ivr}
      </p>
    </div>
  );
}

export default ServiceCard;
