import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import CommunicationPreferences from "./CommunicationPreferences";

const ApplicationForm = ({ preferences, setPreferences }) => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    surname: "",
    contactNo: "",
    email: "",
    company: "",
    message: "",
    preferredCommunication: [],
    depositConfirmed: false,
    paymentMethods: [],
    preferredDebitDate: "",
    salaryDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const preferred_channels = Object.entries(preferences)
  .filter(([key, value]) => value)
  .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
  .join(", ");


    const templateParams = {
      title: formData.title,
      first_name: formData.firstName,
      surname: formData.surname,
      contact_no: formData.contactNo,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      preferred_communication: preferred_channels,
      deposit_confirmed: formData.depositConfirmed ? "Yes" : "No",
      payment_methods: formData.paymentMethods.join(", "),
      preferred_debit_date: formData.preferredDebitDate,
      salary_date: formData.salaryDate,
    };

    emailjs
      .send(
        "service_lkwx8dh", // Replace with your EmailJS Service ID
        "template_gzfzaaj", // Replace with your EmailJS Template ID
        templateParams,
        "09z4nZUsb7p5XukxJ"   // Replace with your EmailJS Public Key
      )
      .then(() => {
        setSuccess("Application submitted successfully!");
        setFormData({
          title: "",
          firstName: "",
          surname: "",
          contactNo: "",
          email: "",
          company: "",
          message: "",
          preferredCommunication: [],
          depositConfirmed: false,
          paymentMethods: [],
          preferredDebitDate: "",
          salaryDate: "",
        });
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to submit application. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="w-full max-w-3xl ml-0 md:ml-40 p-4 md:p-6 text-gray-800 mb-20 space-y-8"
>

  {/* Basic personal information */}
  <section>
    <h2 className="text-xl font-semibold mb-4">Basic personal information</h2>
    <div className="space-y-4">
      <div>
        <label className="block mb-1">Title</label>
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
          <option value="Dr">Dr</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">First name</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
      <div>
        <label className="block mb-1">Surname</label>
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

  {/* Primary contact details */}
  <section>
    <h2 className="text-xl text-gray-500 mb-4">Primary contact details</h2>
    <div className="space-y-4">
      <div>
        <label className="block mb-1">Contact no</label>
        <input
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
      <div>
        <label className="block mb-1">Email address</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
    </div>
  </section>

  {/* Tell us a bit more */}
  <section>
    <h2 className="text-xl text-gray-500 mb-4">Tell us a bit more</h2>
    <div className="space-y-4">
      <div>
        <label className="block mb-1">Company</label>
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
      <div>
        <label className="block mb-1">Please tell us how may we help you?</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 h-32 bg-gray-200"
        ></textarea>
      </div>
    </div>
  </section>

  {/* Payment Confirmation */}
  <section>
    <h2 className="text-xl text-gray-600 mb-4">Payment Confirmation Details</h2>
    <div className="space-y-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          name="depositConfirmed"
          checked={formData.depositConfirmed}
          onChange={handleChange}
          className="mr-2"
        />
        I confirm that I have the R1,000 deposit ready
      </label>

      <div>
        <label className="block mb-1">Preferred method of payment</label>
        <div className="space-y-2 md:ml-4">
          {["Pick-up from my workplace", "Debit order", "EFT", "ATM Direct Deposit"].map((method) => (
            <label key={method} className="block">
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
        <label className="block mb-1">Preferred Debit Date</label>
        <input
          name="preferredDebitDate"
          value={formData.preferredDebitDate}
          onChange={handleChange}
          type="text"
          placeholder="DD/MM/YYYY"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
      <div>
        <label className="block mb-1">Salary Date</label>
        <input
          name="salaryDate"
          value={formData.salaryDate}
          onChange={handleChange}
          type="text"
          placeholder="DD/MM/YYYY"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
        />
      </div>
    </div>
  </section>

  {/* Communication Preferences */}
  <CommunicationPreferences preferences={preferences} setPreferences={setPreferences} />

  {/* Submit */}
  <button
    type="submit"
    disabled={loading}
    className="mt-6 bg-cyan-700 text-white font-semibold px-6 py-2 rounded hover:bg-cyan-800 w-full sm:w-auto"
  >
    {loading ? "Submitting..." : "Submit Application"}
  </button>

  {success && <p className="text-green-600 mt-4">{success}</p>}
  {error && <p className="text-red-600 mt-4">{error}</p>}
</form>

  );
};

export default ApplicationForm;
