function PrivacyPolicy() {
  return (
    <div className="text-start text-lg">
      <p className="mb-4 text-xl">
        {" "}
        At Theraline, we understand the importance of protecting the privacy and
        confidentiality of our users information. This privacy policy outlines
        the information we collect, how we use it, and how we protect it.
      </p>
      <span className="text-xl font-bold">Information Collection</span>
      <p className="mb-4">
        {" "}
        When you use Theraline, we may collect personal information such as your
        name, email address, phone number, and payment information. We may also
        collect information about your usage of the platform, including session
        dates and durations, chat logs, and payment history.
      </p>
      <span className="text-xl font-bold">Use of Information</span>
      <p className="mb-4">
        {" "}
        We use the information we collect to provide our services, including
        scheduling appointments, managing communication between therapists and
        patients, and processing payments. We may also use this information to
        improve our platform and to provide better customer support.
      </p>
      <span className="text-xl font-bold">Protection of Information</span>
      <p className="mb-4">
        {" "}
        We take the protection of your information seriously and implement
        appropriate technical and organizational measures to ensure its
        security. We restrict access to your personal information to authorized
        personnel only, and we use industry-standard encryption to protect
        sensitive data such as payment information.
      </p>
      <span className="text-xl font-bold">Disclosure of Information</span>
      <p>
        We do not disclose personal information to third parties, except in the
        following circumstances:
      </p>
      <ul className="my-2 ml-8 list-disc">
        <li>With your explicit consent</li>
        <li>
          To comply with legal obligations or to protect our legal interests
        </li>
        <li>To prevent fraud or other illegal activities</li>
      </ul>
      <p className="mb-4">
        {" "}
        We may also disclose de-identified or aggregate information for research
        or statistical purposes.
      </p>
      <span className="text-xl font-bold">Your Rights</span>
      <p className="mb-4">
        {" "}
        You have the right to access, rectify, or delete your personal
        information. You may also request that we restrict the processing of
        your data or transfer it to another service. To exercise these rights,
        please contact us using the information below.
      </p>
      <span className="text-xl font-bold">Contact Us</span>
      <p className="mb-4">
        If you have any questions or concerns about our privacy policy or our
        handling of your personal information, please contact us at{" "}
        <a
          className="cursor-pointer text-tertiary"
          href="mailto:info@theraline.com">
          theraline.suport@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

export default PrivacyPolicy;
