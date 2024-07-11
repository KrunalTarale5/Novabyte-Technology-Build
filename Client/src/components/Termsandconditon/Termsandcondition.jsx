import React from "react";


import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";



const Termsandcondition = () => {
  return (
    <div className="Terms">
      <Helmet>
        <link
          href="https://www.NovaByte/terms-and-condition"
          rel="canonical"
        />
      </Helmet>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col justify-center 2xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-2xl max-w-xl mx-auto space-y-12  p-8 my-20">
        <h1 className="lg:text-5xl text-4xl font-bold">Terms and Conditions</h1>

        <p>
          Welcome to NovaByte By using our website and purchasing our
          products and services, you agree to comply with and be bound by the
          following terms and conditions. Please review them carefully.
        </p>

        <div>
          <h2 className="lg:text-4xl text-3xl font-bold mb-3">General</h2>
          <ul className="list">
            <li>
              These Terms govern your use of NovaByte website and services,
              including payment processing services provided by our payment
              partners Razorpay Software Private Limited ("Razorpay") and Ezetap
              Mobile Solutions Private Limited ("Razorpay POS").
            </li>
            <li>
              We may amend these Terms at any time by posting the amended terms
              on our website. Your continued use of our website and services
              after any amendments indicates your consent to be bound by the
              updated Terms.
            </li>
            <li>
              You must be at least 18 years old to use our website and services.
              By using them, you represent that you have the legal capacity to
              accept these Terms.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="lg:text-4xl text-3xl font-bold mb-3">
            Payment Processing Services
          </h2>
          <ul className="list">
            <li>
              We use Razorpay to facilitate online payments and Razorpay POS for
              offline payments via point-of-sale devices.
            </li>
            <li>
              By using these payment services, you agree to be bound by
              Razorpay's General Terms of Use, Razorpay's Specific Terms of Use
              in Part A, and Razorpay POS's Specific Terms of Use in Part B, in
              addition to our Terms.
            </li>
            <li>
              Please refer to the General Terms of Use and Specific Terms of Use
              provided by Razorpay above for detailed information on the payment
              processing terms.
            </li>
          </ul>
        </div>

        <div>
        <h2 className="lg:text-4xl text-3xl font-bold mb-3">
        Cancellation Policy
        </h2>
        <p className='mb-2'>If you are not completely satisfied with your subscription, you may cancel it within 15 days of your initial purchase and receive a full refund.</p>
        <ul className="list">
          <li>
          Once your cancellation request is processed, we will initiate a refund to your original payment method within [specify timeframe, e.g., say 9-12 business days]. Please note that the refund may take additional time to appear in your account, depending on your financial institution's policies.
          </li>
          <li>
          If you cancel your subscription after the 15-day period, you will not be eligible for a refund, and your subscription will remain active until the end of the current billing cycle. You will not be charged for future billing cycles after cancellation.
          </li>
          <li>
          If you have any questions or need assistance with cancelling your subscription, please contact our customer support team at support@novabyte
          </li>
        </ul>
      </div>

        <div>
          <h2 className="lg:text-4xl text-3xl font-bold mb-3">
            Prohibited Activities
          </h2>
          <ul className="list">
            <li>
              You shall not use our website or services for any unlawful,
              fraudulent, or illegal activities. This includes the sale of
              prohibited products and services as listed by Razorpay.
            </li>
            <li>
              You shall comply with all applicable laws in connection with your
              use of our website and services.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="lg:text-4xl text-3xl font-bold mb-3">
            Intellectual Property
          </h2>
          <ul className="list">
            <li>
              The content, trademarks, and logos on our website are owned by or
              licensed to us. You may not copy, reproduce, modify or distribute
              any content without our prior written consent.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="lg:text-4xl text-3xl font-bold mb-3">Privacy</h2>
          <ul className="list">
            <li>
              We take your privacy very seriously. Please refer to our Privacy
              Policy for information on how we collect, use and disclose your
              personal data.
            </li>
            <li>
              By using our website and services, you consent to our processing
              of your personal information as set forth in our Privacy Policy.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="lg:text-4xl text-3xl font-bold mb-3">
            Limitation of Liability
          </h2>
          <ul className="list">
            <li>
              In no event shall NovaByte, Razorpay or Razorpay POS be liable
              for any indirect, incidental, special, consequential or punitive
              damages arising out of your use of our website or services.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="lg:text-4xl text-3xl font-bold mb-3">
            Indemnification
          </h2>
          <ul className="list">
            <li>
              You agree to indemnify and hold harmless [Your Company Name],
              Razorpay, Razorpay POS and their affiliates from any claims,
              losses, liabilities and expenses arising out of your breach of
              these Terms or your violation of any law.
            </li>
          </ul>
        </div>

        <div>
        <h2 className="lg:text-4xl text-3xl font-bold mb-3">
        Grievance Redressal
        </h2>
        <ul className="list">
          <li>
          If you have any complaints, grievances or feedback related to our website, services, payment processing or intellectual property, please contact our Grievance Officer at:
          </li>
        </ul>
      </div>

      <p>NovaByte Contact No:  8076774495<br />Sector 57, Gurugram, Haryana, India<br />Email: support@NovaByte <br /> You can also raise a grievance ticket at: <Link style={{ color: 'blue' }} to = "/contact">Contact</Link></p> 


      <div>
      <h2 className="lg:text-4xl text-3xl font-bold mb-3">
      Governing Law
      </h2>
      <ul className="list">
        <li>
        These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at Gurugram, Haryana, India.
        </li>
      </ul>
    </div>

    <p>If you have any questions about these Terms, please contact us at support@NovaByte.</p>

      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Termsandcondition;
