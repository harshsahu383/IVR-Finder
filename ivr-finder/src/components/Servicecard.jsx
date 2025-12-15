function ServiceCard({ service }) {
  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <h4 className="font-semibold">
        {service.serviceName}
      </h4>

      <p className="text-sm text-gray-600 mt-1">
        📞 {service.phone}
      </p>

      <p className="text-sm text-blue-600 mt-1">
        IVR: {service.ivr}
      </p>
    </div>
  );
}

export default ServiceCard;
