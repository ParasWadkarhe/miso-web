import React from "react";
import Footer from "./Footer.jsx";

const Cookie = () => {
  return (
    <>
      <div className=" bg-[#efebe7f7] pt-24 pb-20">
        <div>
          <p className="text-8xl font-[Raleway] text-center">
            <strong>COOKIE POLICY</strong>
          </p>
        </div>

        <div className="flex flex-col pt-20 ">
          <div className="text-4xl font-[Montserrat] pl-20">
            <strong>Types of Cookies Used</strong>
          </div>
          <br />
          <div className="text-xl pl-32 pr-32 font-[Raleway]">
            <p>
              At Miso, we employ various types of cookies to enhance your
              experience and ensure optimal site functionality. Below is a
              detailed overview of the types of cookies we use:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These are vital for the
                basic operation of our website. Without these cookies, the
                services you require, such as navigating between pages or
                accessing secure areas, cannot be provided. They ensure the
                website functions efficiently.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies gather
                anonymous information about how visitors use our website,
                allowing us to analyze data such as which pages are the most
                visited, any errors users encounter, and how users interact with
                different parts of the site. This data helps us improve the
                performance and design of our website.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Designed to remember
                your preferences and choices (such as your language or region),
                functionality cookies provide a more personalized experience.
                These cookies also help us provide enhanced features like
                remembering login details and ensuring you don’t have to enter
                information multiple times.
              </li>
              <li>
                <strong>Targeting/Advertising Cookies:</strong> These cookies
                are used to deliver content and ads that are relevant to you and
                tailored to your interests. They may also be used to limit the
                number of times you see an advertisement and to help measure the
                effectiveness of our marketing campaigns. We may share this
                information with third-party service providers who assist in
                advertising and analytics.
              </li>
              <li>
                <strong>Third-Party Cookies:</strong> Miso may allow third
                parties to place cookies on your device to enable social media
                sharing, personalized advertising, or for analytics purposes.
                These cookies come from third-party partners and are governed by
                the privacy policies of those external parties.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <div className="text-4xl font-[Montserrat] pl-20">
            <strong>Purpose of Cookies</strong>
          </div>
          <br />
          <div className="text-xl pl-32 pr-32 font-[Raleway]">
            <p>
              Cookies play an integral role in improving your browsing
              experience on Miso’s website. Below are the primary purposes of
              our cookies:
            </p>
            <ul>
              <li>
                <strong>Analytics and Performance:</strong> Cookies allow us to
                track and monitor website traffic and user interaction patterns.
                This data is essential for improving our website's overall
                functionality, identifying errors, optimizing user flow, and
                enhancing the overall user experience.
              </li>
              <li>
                <strong>Personalization and User Preferences:</strong> Cookies
                store information such as login credentials, preferences (like
                language and region), and previously viewed content. This allows
                us to provide a seamless, tailored experience every time you
                visit.
              </li>
              <li>
                <strong>Marketing and Targeted Advertising:</strong> Cookies
                help us understand your interests based on your browsing
                behavior. We use this data to personalize the content and ads
                you see on our website and other platforms. Targeted ads help
                ensure that the information you receive is relevant and engaging
                for you.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <div className="text-4xl font-[Montserrat] pl-20">
            <strong> User Consent</strong>
          </div>
          <br />
          <div className="text-xl pl-32 pr-32 font-[Raleway]">
            <p>
              By continuing to use our website, you acknowledge that you have
              been informed of our cookie policy and consent to our use of
              cookies. You have control over your cookie preferences and can
              manage them through various options provided:
            </p>
            <ul>
              <li>
                <strong>Cookie Banner:</strong> When you first visit our
                website, a cookie banner will appear, allowing you to accept or
                decline the different categories of cookies. This is the most
                direct way to manage your cookie preferences.
              </li>
              <li>
                <strong>Browser Settings:</strong> Most modern web browsers
                allow you to control and manage cookies. You can adjust your
                browser settings to block or delete cookies from specific
                websites or entirely. Please note, however, that disabling
                certain cookies may affect the functionality of the Miso website
                and limit some services or features.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <div className="text-4xl font-[Montserrat] pl-20">
            <strong>Managing Cookies</strong>
          </div>
          <br />
          <div className="text-xl pl-32 pr-32 font-[Raleway]">
            <p>
              We understand that privacy preferences vary among users.
              Therefore, we provide multiple ways to manage your cookies:
            </p>
            <ul>
              <li>
                <strong>Browser-Specific Instructions:</strong> Each browser
                offers its own method for managing cookies. You can visit the
                following links for guidance on managing cookies through popular
                web browsers:
                <ul>
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Chrome:
                      <span className="text-purple-500 hover:font-bold ease-in-out transition-all duration-100">
                        {" "}
                        Manage Cookies
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mozilla Firefox:{" "}
                      <span className="text-purple-500 hover:font-bold ease-in-out transition-all duration-100">
                        {" "}
                        Manage Cookies
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Microsoft Edge:{" "}
                      <span className="text-purple-500 hover:font-bold ease-in-out transition-all duration-100">
                        {" "}
                        Manage Cookies
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-us/HT201265"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Safari:{" "}
                      <span className="text-purple-500 hover:font-bold ease-in-out transition-all duration-100">
                        {" "}
                        Manage Cookies
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Opt-Out Tools:</strong> If you wish to prevent the use
                of cookies for advertising or tracking purposes, you can also
                opt out by visiting industry-standard opt-out platforms such as:
                <ul>
                  <li>
                    <a
                      href="https://www.youronlinechoices.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-purple-500 hover:font-bold ease-in-out transition-all duration-100">
                        {" "}
                        Your Online Choices
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://optout.networkadvertising.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <span className="text-purple-500 hover:font-bold ease-in-out transition-all duration-100">
                        {" "}
                        Network Advertising Initiative
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Please be aware that completely disabling cookies may result in
              some parts of the Miso website becoming inaccessible or not
              functioning correctly. Essential cookies are required for site
              security and functionality, so opting out of these may limit your
              experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <div className="text-4xl font-[Montserrat] pl-20">
            <strong> Data Protection</strong>
          </div>
          <br />
          <div className="text-xl pl-32 pr-32 font-[Raleway]">
            <p>
              At Miso, your privacy is of the utmost importance to us. All data
              collected through cookies is handled in strict accordance with our
              Privacy Policy and applicable data protection regulations such as
              the General Data Protection Regulation (GDPR) and the California
              Consumer Privacy Act (CCPA). We ensure that all cookie data is
              securely stored and processed, and we do not sell or share your
              personal information with third parties without your explicit
              consent, except where necessary for the functioning of our website
              or as required by law.
            </p>
            <ul>
              <li>
                <strong>Data Security:</strong> Miso implements robust security
                measures to protect cookie data against unauthorized access,
                alteration, or disclosure.
              </li>
              <li>
                <strong>Your Rights:</strong> As a user, you have the right to
                request access to, correction, or deletion of any personal data
                collected via cookies. To exercise these rights, or for any
                questions regarding our cookie policy, you can contact us at{" "}
                <a href="mailto:email@example.com">email@example.com</a>.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <div className="text-4xl font-[Montserrat] pl-20">
            <strong> Changes to Our Cookie Policy</strong>
          </div>
          <br />
          <div className="text-xl pl-32 pr-32 font-[Raleway]">
            <p>
              We may update this Cookie Policy periodically to reflect changes
              in technology, legislation, or our practices. Any updates will be
              posted on this page, and where required, we will notify you by
              other means, such as email or through a notification on our
              website.
            </p>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <div className="text-4xl font-[Montserrat] pl-20">
            <strong> contact us</strong>
          </div>
          <br />
          <div className="text-xl pl-32 pr-32 font-[Raleway]">
            If you have any questions or concerns about our use of cookies or
            our Cookie Policy, please reach out to our data protection officer
            at [email address] for more information. For more information,
            please review our [Privacy Policy](#). By using the Miso website,
            you agree to the practices outlined in this Cookie Policy.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cookie;
