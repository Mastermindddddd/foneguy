import React from "react";

const ApplicationForm = () => {
  return (
    <div className="w-full max-w-3xl ml-40 p-6 text-gray-800 mb-20">

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
        <h2 className="text-xl text-gray-500 mb-4 mt-8">Primary contact details</h2>
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
        <h2 className="text-xl text-gray-500 mb-4 mt-8">Tell us a bit more</h2>
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
              <label><input type="checkbox" className="mr-2" /> Phone</label>
              <label><input type="checkbox" className="mr-2" /> Email</label>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl text-gray-600 mb-4 mt-8">Payment Confirmation Details</h2>
        <div className="space-y-4">
          <div>
            <label>
              <input type="checkbox" className="mr-2" />
              I confirm that I have the R1,000 deposit ready
            </label>
          </div>

          <div>
            <label className="block mb-1 mt-8">Preferred method of payment</label>
            <div className="space-y-2 ml-4">
              <label className="block"><input type="checkbox" className="mr-2" /> Pick-up from my workplace</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Debit order (if selected, please indicate your preferred debit date)</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Electronic Funds Transfer (EFT)</label>
              <label className="block"><input type="checkbox" className="mr-2" /> ATM Direct Deposit</label>
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
