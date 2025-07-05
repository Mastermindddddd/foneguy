import React from "react";

const ApplicationForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800 space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-4">Basic personal information</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Title</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200">
              <option>Please select...</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">First name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200" />
          </div>
          <div>
            <label className="block mb-1">Surname</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Primary contact details</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Contact no</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200" />
          </div>
          <div>
            <label className="block mb-1">Email address</label>
            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Tell us a bit more</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Company</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200" />
          </div>
          <div>
            <label className="block mb-1">Please tell us how may we help you ?</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 h-32 bg-gray-200"></textarea>
          </div>
          <div>
            <label className="block mb-1">Preferred method of communication</label>
            <div className="space-x-4">
              <label><input type="checkbox" /> Phone</label>
              <label><input type="checkbox" /> Email</label>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Payment Confirmation Details</h2>
        <div className="space-y-4">
          <div>
            <label>
              <input type="checkbox" className="mr-2" />
              I confirm that I have the R1,000 deposit ready
            </label>
          </div>

          <div>
            <label className="block mb-1">Preferred method of communication</label>
            <div className="space-y-2 ml-4">
              <label className="block"><input type="checkbox" /> Pick-up from my workplace</label>
              <label className="block"><input type="checkbox" /> Debit order (if selected, please indicate your preferred debit date)</label>
              <label className="block"><input type="checkbox" /> Electronic Funds Transfer (EFT)</label>
              <label className="block"><input type="checkbox" /> ATM Direct Deposit</label>
            </div>
          </div>

          <div>
            <label className="block mb-1">Preferred Debit Date</label>
            <input type="text" placeholder="DD/MM/YYYY" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200" />
          </div>

          <div>
            <label className="block mb-1">Salary Date</label>
            <input type="text" placeholder="DD/MM/YYYY" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationForm;
