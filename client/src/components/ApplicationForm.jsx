import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ApplicationForm = ({ preferences, setPreferences }) => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    surname: "",
    contactNo: "",
    familyNo: "",
    email: "",
    company: "",
    message: "",
    postalCode: "",
    idType: "",
    idPassportNumber: "",
    idPassportCountry: "",
    gender: "",
    dateOfBirth: "",
    workDuration: "",
    preferredCommunication: [],
    depositConfirmed: false,
    paymentMethods: [],
    preferredDebitDate: "",
    salaryDate: "",
    paymentDeclaration: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "depositConfirmed") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "checkbox" && name === "paymentMethods") {
      if (checked) {
        setFormData((prev) => ({ ...prev, paymentMethods: [...prev.paymentMethods, value] }));
      } else {
        setFormData((prev) => ({
          ...prev,
          paymentMethods: prev.paymentMethods.filter((method) => method !== value),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const requiredFields = [
      "title",
      "firstName",
      "surname",
      "contactNo",
      "email",
      "idType",
      "idPassportNumber",
      "idPassportCountry",
      "gender",
      "dateOfBirth",
      "paymentDeclaration"
    ];
    for (let field of requiredFields) {
      if (!formData[field]) {
        setError(`Please complete all required fields before proceeding. Missing: ${field}`);
        return false;
      }
    }
    setError(null);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const preferred_channels = Object.entries(preferences)
      .filter(([_, value]) => value)
      .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
      .join(", ");

    const dataToSave = {
      ...formData,
      preferred_communication: preferred_channels,
      deposit_confirmed: formData.depositConfirmed ? "Yes" : "No",
      payment_methods: formData.paymentMethods.join(", "),
    };

    try {
      localStorage.setItem("applicationFormData", JSON.stringify(dataToSave));
      setSuccess("Application saved successfully! Proceeding...");
      setTimeout(() => {
        navigate("/document-upload-form");
      }, 1000);
    } catch (err) {
      console.error("Failed to save form data:", err);
      setError("Could not proceed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="w-full max-w-3xl ml-0 md:ml-40 p-4 md:p-6 text-gray-800 mb-20 space-y-8"
>

  {/* Basic personal information */}
  <section>
    <h2 className="text-2xl mb-4 text-gray-700">Basic personal information</h2>
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold">Title</label>
        <select
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        >
          <option value="">Please select...</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 font-semibold">First name</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Surname</label>
        <input
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
    </div>
  </section>
  <section className="space-y-4">
  {/* Identification Type */}
  <div>
        <label className="block font-semibold mb-1">ID Type*</label>
        <div className="flex gap-4">
          {["SA ID", "Passport"].map((id) => (
            <label key={id} className="flex items-center gap-2">
              <input
                type="radio"
                name="idType"
                value={id}
                checked={formData.idType === id}
                onChange={handleChange}
              />
              {id}
            </label>
          ))}
        </div>
      </div>

  {/* ID/Passport Number */}
  <div>
    <label className="block font-semibold mb- ">ID/ Passport Number</label>
    <input
      type="text"
      name="idPassportNumber"
      value={formData.idPassportNumber}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
    />
  </div>

  {/* ID/Passport Country */}
  <div>
  <label className="block font-semibold mb-1">ID/ Passport Country</label>
  <select
    name="idPassportCountry"
    value={formData.idPassportCountry}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
  >
    <option value="">Please select...</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="Argentina">Argentina</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Belgium">Belgium</option>
    <option value="Brazil">Brazil</option>
    <option value="Canada">Canada</option>
    <option value="China">China</option>
    <option value="Denmark">Denmark</option>
    <option value="Egypt">Egypt</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="France">France</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Ireland">Ireland</option>
    <option value="Italy">Italy</option>
    <option value="Japan">Japan</option>
    <option value="Kenya">Kenya</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Mexico">Mexico</option>
    <option value="Netherlands">Netherlands</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Norway">Norway</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Philippines">Philippines</option>
    <option value="Portugal">Portugal</option>
    <option value="Russia">Russia</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Singapore">Singapore</option>
    <option value="South Africa">South Africa</option>
    <option value="South Korea">South Korea</option>
    <option value="Spain">Spain</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Thailand">Thailand</option>
    <option value="Turkey">Turkey</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="United States">United States</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Zimbabwe">Zimbabwe</option>
  </select>
</div>

  {/* Gender */}
  <div>
        <label className="block font-semibold mb-1">Gender*</label>
        <div className="flex gap-4">
          {["Male", "Female"].map((g) => (
            <label key={g} className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value={g}
                checked={formData.gender === g}
                onChange={handleChange}
              />
              {g}
            </label>
          ))}
        </div>
      </div>

  {/* Date of Birth */}
  <div>
    <label className="block font-medium mb-1">Date of Birth</label>
    <input
      type="date"
      name="dateOfBirth"
      value={formData.dateOfBirth}
      onChange={handleChange}
      placeholder="DD/MM/YYYY"
      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
    />
  </div>
</section>


  {/* Primary contact details */}
  <section>
    <h2 className="text-2xl mb-4 mt-20">Primary contact details</h2>
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold">mobile Number</label>
        <input
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">mobile Number of A Friend/Family</label>
        <input
          name="familyNo"
          value={formData.familyNo}
          onChange={handleChange}
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Email address</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Postal Code</label>
        <input
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
    </div>
  </section>

  {/* Tell us a bit more */}
  <section>
    <h2 className="text-2xl mb-4 mt-20">Tell us a bit more</h2>
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold">Company</label>
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          type="text"
          placeholder="where do you work?"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
      <div>
    <label className="block font-medium mb-1 font-semibold">how long have you worked?</label>
    <input
      type="date"
      name="workDuration"
      value={formData.workDuration}
      onChange={handleChange}
      placeholder="DD/MM/YYYY"
      className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
    />
  </div>
      <div>
        <label className="block mb-1 font-semibold">Please tell us how may we help you?</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 h-32 bg-gray-200"
        ></textarea>
      </div>
      <div>
  <label className="block font-semibold mb-1">Preferred method of communication</label>
  <div className="space-y-2">
    {["Phone", "Email"].map((method) => (
      <label key={method} className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="preferredCommunication"
          value={method}
          checked={formData.preferredCommunication.includes(method)}
          onChange={handleChange}
          className="h-4 w-4 text-cyan-700 border-gray-300 rounded"
        />
        <span className="text-gray-600">{method}</span>
      </label>
    ))}
  </div>
</div>

    </div>
  </section>

  {/* Payment Confirmation */}
  <section>
    <h2 className="text-2xl mb-4 mt-12">Payment Confirmation Details</h2>
    <div className="space-y-4">
      <label className="flex items-center text-gray-600">
        <input
          type="checkbox"
          name="depositConfirmed"
          checked={formData.depositConfirmed}
          onChange={handleChange}
          className="mr-2 text-gray"
        />
        I confirm that I have the R1,000 deposit ready
      </label>

      <div>
        <label className="block mb-2 font-semibold mt-12">Preferred method of payment</label>
        <div className="space-y-2 md:ml-4">
          {["Pick-up from my workplace", "Electronic Funds Transfer (EFT)", "ATM Direct Deposit"].map((method) => (
            <label key={method} className="block text-gray-600">
              <input
                type="checkbox"
                name="paymentMethods"
                value={method}
                checked={formData.paymentMethods.includes(method)}
                onChange={handleChange}
                className="mr-2"
              />
              {method}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-1 mt-8 font-semibold">Salary Date</label>
        <input
          name="salaryDate"
          value={formData.salaryDate}
          onChange={handleChange}
          type="date"
          placeholder="DD/MM/YYYY"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
      <div>
        <h2 className="text-lg mb-2 mt-12 font-semibold">I hereby commit to making all payments as per the scheduled dates above</h2>
        <label className="flex items-center text-gray-600">
        <input
          type="checkbox"
          name="paymentDeclaration"
          checked={formData.paymentDeclaration}
          onChange={handleChange}
          className="mr-2 text-gray"
        />
        I confirm that I commit to making all the payments 
      </label>

      </div>
    </div>
  </section>

  {/* Submit */}
  <button
    type="submit"
    disabled={loading}
    className="mt-6 bg-cyan-700 text-white font-semibold px-6 py-2 rounded hover:bg-cyan-800 w-full sm:w-auto"
  >
    {loading ? "Proceeding..." : "PROCEED"}
  </button>

  {success && (
  <div className="mt-6 p-4 rounded-lg bg-green-100 border border-green-400 text-green-800 flex items-start gap-3">
    <svg className="h-6 w-6 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
    <div>
      <strong className="block font-semibold">Success</strong>
      <span>{success}</span>
    </div>
  </div>
)}

{error && (
  <div className="mt-6 p-4 rounded-lg bg-red-100 border border-red-400 text-red-800 flex items-start gap-3">
    <svg className="h-6 w-6 text-red-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <div>
      <strong className="block font-semibold">Error</strong>
      <span>{error}</span>
    </div>
  </div>
)}

</form>

  );
};

export default ApplicationForm;
