import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../services';

export default function PrivacyPolicy() {
  return (
    <SafeAreaView>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView style={styles.color}>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>
            Weight Loss On Demand by {'      '}Privacy Policy
          </Text>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.textColor]}>
              Effective Date: <Text style={styles.regular}>January 02, 2023</Text>
            </Text>
          </View>
          {/* <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.textColor]}>
              We are pleased to announce Weight Loss on Demand,. are now part
              of Included Health, Inc.
            </Text>
          </View> */}
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.textColor]}>
              We are in the process of integrating our terms and services to
              provide more options and help you find the care you need, when you
              need it, regardless of which services you use.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              The use of the Weight Loss on Demand affiliated websites, and
              any of the related Included Health products and services linked to
              this document or described below ("Services") unless otherwise
              specified), is subject to all of the terms, agreements, statements
              of rights, consent forms, and policies referenced and linked{' '}
              <Text style={styles.link}>here</Text>, which applied prior to the
              integration to the applications and platforms.
            </Text>
          </View>

          <View style={[styles.paddingTop]}>
            <Text style={styles.textColor}>
              We encourage you to read these documents to understand the terms,
              policies, and more that apply to you when you use our websites,
              products, or services, including how we process your personal
              information and how you can update and manage that information.
            </Text>
            <Text style={[styles.textColor, styles.top]}>
              As we further integrate, our plan is to continue to update and
              consolidate these documents in the coming months to make it easier
              for you to understand what to expect from us-and what we expect
              from you-as you use our Services.
            </Text>
            <View style={[styles.border, styles.marginTop]}></View>
          </View>
          <View style={[styles.paddingBottom, styles.paddingTop]}></View>
          <Text style={styles.addPaymentText}>
            Weight Loss On Demand by {'      '}Privacy Policy
          </Text>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>
              Purpose Of This Privacy Policy
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health, Inc. ("
              <Text style={styles.bold}>WeightLoss On Demand</Text>" "
              <Text style={styles.bold}>Company</Text>", "
              <Text style={styles.bold}>we</Text>", "
              <Text style={styles.bold}>us</Text>", or "
              <Text style={styles.bold}>our</Text>") operates the websites
              located at <Text style={styles.link}>weightlossondemand.com</Text> and{' '}
              <Text style={styles.link}>weightlossondemand.com</Text>, and other
              websites, products, services, and mobile applications with links
              to this Privacy Policy, including without limitation the Weight
              Loss On Demand webpages and secure applications (collectively, the
              "Sites" or "Websites" unless otherwise specified). Users of the
              Sites or Services are referred below as "
              <Text style={styles.bold}></Text>
              Users" , "<Text style={styles.bold}>Members</Text>", "
              <Text style={styles.bold}>you</Text>", "
              <Text style={styles.bold}>your</Text>", or "{' '}
              <Text style={styles.bold}>yours</Text>".
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              We offer online telehealth services enabling our Members to report
              their health history and engage independent healthcare
              professionals ("{' '}
              <Text style={styles.bold}>Healthcare Professionals</Text>") to
              obtain medical and healthcare services, as well as provide
              behavioral health coaching from Coaches ("
              <Text style={styles.bold}>Coaches</Text>") who do not provide
              professional or clinical services.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              The Healthcare Professionals who deliver Services through Included
              Health are independent professionals practicing within several
              groups of independently owned professional practices
              (collectively, "
              <Text style={styles.bold}>
                Weight Loss On Demand Professionals
              </Text>
              "). Please refer to the Weight Loss On Demand Professionals{' '}
              <Text style={styles.link}>Notice of Privacy Practices</Text> to
              learn more about these groups and how they're organized.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              When we use the term “
              <Text style={styles.bold}>personal information</Text>” in this
              Privacy Policy, we mean information that on its own, or in
              combination with other information, could reasonably identify you.
              Moreover, the personal information we receive or obtain through
              your use of the Services may be subject to different state and
              federal privacy laws, including the Health Insurance Portability
              and Accountability Act of 1996 and its implementing regulations
              (“HIPAA”). Descriptions in this Privacy Policy regarding our
              collection, use and disclosure of personal information may be
              subject to or further restricted by the requirements of these
              laws. In addition, where Included Health collects, creates,
              maintains, uses and discloses Protected Health Information
              (“PHI”), which is personally identifiable health information
              protected by HIPAA, we may be and likely are subject to certain
              agreements, including with health plans and health care providers.
              In those cases, our collection, creation, maintenance, use and
              disclosure of PHI will be in accordance with such agreements and
              the applicable Notice of Privacy Practices.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              With that in mind, all collection, use, and disclosure of your
              health information or PHI through the Sites are governed by the
              Weight Loss On Demand Professionals{' '}
              <Text style={styles.link}>Notice of Privacy Practices.</Text>
              References otherwise throughout this Policy to HIPAA, PHI, and
              related is provided for informational purposes. For official
              notices concerning, or for more information or questions about,
              the use and disclosure of your PHI, please refer to the Weight
              Loss On Demand Professionals Notice of Privacy Practices, or where
              applicable your health plan’s{' '}
              <Text style={styles.link}>Notice of Privacy Practices.</Text>
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              This Privacy Policy discloses how Included Health collects, uses,
              and discloses your other personal information, that is not health
              information, both on its own and on behalf of the Weight Loss On
              Demand Professionals with respect to the Sites, as well as any
              other websites, mobile applications, or other products and
              services provided by Included Health that link to this Privacy
              Policy.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Please read this Privacy Policy carefully before using the Sites
              or Services. By visiting or using any of the Sites or Services,
              you are accepting the practices described in this Privacy Policy,
              as well as the Weight Loss On Demand Terms of Service and other
              terms, agreements, statements of rights, consent forms, and
              policies referenced above, where applicable. If you do not agree
              to this Privacy Policy, or any of the documents referenced above,
              please do not use the Sites or Services.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>
              Personal Information We Collect or Maintain May Include:
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              <Text style={styles.bold}> Sites Activity Information.</Text> We
              track certain actions you take on the Sites such as the content of
              searches performed on the Sites and information that you enter
              into the Sites (e.g. your name and email address when signing up
              for an email newsletter, requesting more information about us and
              our Services, etc.).
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              <Text style={styles.bold}>
                Access Device and Browser Information.
              </Text>{' '}
              When you access the Sites from a computer or other device, we may
              collect information from that device, such as your Internet
              protocol address, browser type, connection speed, device model,
              operating system version, and access times.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              <Text style={styles.bold}>Cookies.</Text>We may use both session
              Cookies (which expire once you close your web browser) and
              persistent Cookies to make the Sites and Services easier to use,
              to make our advertising better, and to protect both you and
              Included Health. For more information about our use of Cookies and
              to opt out of performance, functionality, or targeting cookies
              please visit our cookie preference center.
            </Text>
          </View>

          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              <Text style={styles.bold}>Analytics Tools.</Text> We use tools
              such as Google Analytics, AppsFlyer and Mixpanel to help analyze
              how individuals use the Sites. Such third parties may use Cookies,
              APIs, and SDKs in our services to enable them to collect and
              analyze user and device related data and information on our
              behalf. Google Analytics, AppsFlyer, and Mixpanel use Cookies to
              collect information such as how often users visit the Sites, what
              pages they visit, and what other sites they used prior to coming
              to the Sites. We use the information we get to improve our Sites
              and Services. Although Google Analytics plants a persistent Cookie
              on your web browser to identify you as a unique user the next time
              you visit the Sites, the Cookie cannot be used by anyone but
              Google. Google’s ability to use and share information collected by
              Google Analytics about your visits to the Sites is restricted by
              the Google Analytics Terms of Use and the Google Privacy Policy.
              You may prevent your data from being used by Google Analytics by
              downloading and installing the Google Analytics Opt-out Browser
              Add-on, available at{' '}
              <Text style={styles.link}>
                https://tools.google.com/dlpage/gaoptout/.
              </Text>
              Mixpanel’s ability to use and share information it collects about
              your visits to the Sites is restricted by the Mixpanel Terms of
              Use located at{' '}
              <Text style={styles.link}>https://mixpanel.com/terms/</Text> and
              the Mixpanel Privacy Policy located at{' '}
              <Text style={styles.link}>https://mixpanel.com/privacy/.</Text>{' '}
              You can opt-out of Mixpanel’s automatic retention of data
              collected through your browsers while on our Sites by clicking on
              this link
              <Text style={styles.link}>https://mixpanel.com/optout/.</Text> To
              track opt-outs, Mixpanel uses a persistent opt-out Cookie placed
              on your devices. You can find out the types of information
              AppsFlyer collects and how you can opt-out of AppsFlyer by
              visiting its website:
              <Text style={styles.link}>
                https://www.appsflyer.com/optout
              </Text>{' '}
              or by emailing privacy@appsflyer.com
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              <Text style={styles.bold}>
                Certain features of the Sites use GPS technology
              </Text>{' '}
              to collect real-time information about the location of your device
              so that the Sites can connect you to a Healthcare Professional who
              is licensed or authorized to provide Services in the state where
              you are located. Strictly necessary and functionality Cookies are
              used on our Sites to support Sites functionality and security.
              These Cookies collect crash analytics and Sites activity data, as
              well as provide security measures.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              <Text style={styles.bold}>
                We may collect information from your mobile device or computer
              </Text>{' '}
              including the type of device used to access the Sites, operating
              system version, and mobile device carrier. This information is
              used to identify and fix bugs and otherwise improve the
              performance of the Sites.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              In many circumstances, the information listed above is
              non-personal information. For example, the information collected
              through Cookies may not contain any identifiable personal
              information. We will still treat that information as personal
              information under this Privacy Policy if (a) an applicable local
              law considers it to be personal information or (b) we combine it
              with personal information.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>De-Identified Information</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health may use de-identified information created by us
              without restriction. When we use the term “de-identified
              information,” we mean information that is neither used nor
              intended to be used to personally identify an individual.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Children</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health does not knowingly collect or maintain personally
              identifiable information from persons under 18 years old, and no
              part of our Sites is directed to persons under 18. IF YOU ARE
              UNDER 18 YEARS OF AGE, PLEASE DO NOT USE OR ACCESS OUR Sites AT
              ANY TIME OR IN ANY MANNER, except where allowed in accordance with
              our <Text style={styles.link}>Terms of Service</Text>. Where
              permitted, any personal information relating to those children
              will be health information governed by the Weight Loss On Demand
              Professionals{' '}
              <Text style={styles.link}>Notice of Privacy Practices.</Text>
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              If you are a parent or guardian and discover that your child under
              the age of 18, or equivalent minimum age depending on
              jurisdiction, has obtained an Included Health account, then you
              may alert us at the contact information below under “Contact Us”,
              and request that we delete that child’s personal information from
              our systems. If we learn that we have collected the personal
              information of a child under 18, or equivalent minimum age
              depending on jurisdiction, outside the above circumstances we will
              take steps to delete the information as soon as possible, except
              where prohibited by applicable law.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>
              We May Use Your Personal Information For The Following Purposes:
            </Text>
            <View style={[styles.row, styles.top]}>
              <Entypo name="dot-single" color={colors.primary} size={25} />
              <Text style={[styles.textColor, styles.right]}>
                To provide you with the Sites and full functionality on the
                Sites.
              </Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.primary} size={25} />
              <Text style={[styles.textColor, styles.right]}>
                To notify you when Sites updates are available.
              </Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.primary} size={25} />
              <Text style={[styles.textColor, styles.right]}>
                To market and promote the Sites and the Services to you.
              </Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.primary} size={25} />
              <Text style={[styles.textColor, styles.right]}>
                To create de-identified information such as aggregate statistics
                relating to the use of the Sites.
              </Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.primary} size={25} />
              <Text style={[styles.textColor, styles.right]}>
                To fulfill any other purpose for which you provide us personal
                information.
              </Text>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.textColor}>
                We may also disclose personal information that we collect or you
                provide:
              </Text>
            </View>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              To our subsidiaries, affiliates, and associated organizations.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              To contractors, service providers, and other third parties we use
              to support our business and who are bound by contractual
              obligations to keep personal information confidential.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              As required by law, which can include providing information as
              required by a court order.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              When we believe in good faith that disclosure is necessary to
              protect your safety or the safety of others, to protect our
              rights, to investigate fraud, or to respond to a government
              request.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              To a buyer or other successor in the event of a merger,
              divestiture, restructuring, reorganization, dissolution or other
              sale or transfer of some or all of Included Health’s assets,
              whether as a going concern or as part of bankruptcy, liquidation
              or similar proceeding, in which personal information maintained by
              the Sites is among the assets transferred.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              For any other purpose disclosed by us when you provide the
              information.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Disclosure To Third Parties</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              At times, Included Health may provide third parties with certain
              personal information to provide or improve our Sites or Services,
              including to help us market to consumers. When we do, we require
              those third parties to handle it in accordance with applicable
              laws. We do not sell personal information, and personal
              information will not be shared with third parties for their
              marketing purposes.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              This Privacy Policy applies only to information we collect through
              the Sites. This Privacy Policy DOES NOT apply to information
              collected by any third party. When you click on links on the Sites
              you may leave our Sites. We are not responsible for the privacy
              practices of other sites, and we encourage you to read their
              privacy statements.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Modification Of Information</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Members will be able to update some of their information through
              the Sites. Requests to modify any information may also be
              submitted to Included Health using the below contact information
              under “Contact Us”.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>
              Limitations On Deletion of Information
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You may request deletion of your personal information by Included
              Health, however, we may be required (by law or otherwise) to keep
              this information and not delete it (or to keep this information
              for a certain time, in which case we will comply with your
              deletion request only after we have fulfilled such requirements).
              When we delete personal information, it will be deleted from the
              active database, but may remain in our archives (subject to
              applicable law) and we may also retain anonymous information about
              your use of our services. Once we disclose some of your personal
              information to third parties, we may not be able to access that
              personal information any longer and cannot force the deletion or
              modification of any such information by the parties to whom we
              have made those disclosures. After we delete personal information,
              we may retain de-identified information and will continue to use
              de-identified information as permitted under this Privacy Policy.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>
              Steps We Take To Keep Your Information Secure
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health employs reasonable physical, electronic, and
              managerial security methods to help protect against unauthorized
              access to personal information, such as encryption. But please be
              aware that no data transmission over the Internet or data storage
              facility can be guaranteed to be perfectly secure. As a result,
              while we try to protect your personal information, we cannot
              ensure or guarantee the security of any information you transmit
              to us.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Right to Non-Discrimination </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health will not discriminate against you for exercising
              any of your privacy rights under law, or as set forth in this
              Privacy Policy.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>California </Text>
          </View>

          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              In addition to the rights above, the California Consumer Privacy
              Act (“<Text style={styles.bold}>CCPA</Text>”) provides California
              consumers with the right to obtain from Included Health
              information about the personal information about you that we
              collect, use, and disclose. If you choose to exercise your privacy
              rights, you will not receive discriminatory treatment or a lesser
              degree of service from us.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              At Included Health, member and consumer privacy are very important
              to us. As a result, before we process any requests we first must
              verify your identity and ensure we have enough information. To
              exercise rights described in this section or elsewhere in the
              Privacy Policy, you must submit to us a “
              <Text style={styles.bold}>verifiable request</Text>”, including
              by:
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              providing sufficient information that allows us to reasonably
              verify you are the person about whom we collected personal
              information or an authorized representative; and
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              describing your request with sufficient detail that allows us to
              properly understand, evaluate, and respond to it.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              With that in mind, at this time:
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Requests from Members are considered verified if submitted using
              our Services. If you are an existing Member, please submit your
              request either by calling us and confirming your identity, or by
              submitting via the application (e.g., using the chat service, or
              via an open case). If, however, there is indication or suspicion
              of fraud or other malicious activity on the Member’s account, we
              may suspend reliance on these verification methods and defer to
              other methods to confirm authenticity.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              You may alternatively contact us via the information provided
              below under “Contact Us”. However, please note that emailed
              requests are not considered verified, and we may request
              additional information from you (that we would already have in our
              records) in order to confirm your identity.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              We may also recognize verified requests submitted on an
              individual’s behalf by{' '}
              <Text style={styles.bold}>“Authorized Agents”</Text>. To be valid,
              we must receive from the Agent a signed authorization from the
              individual on whose behalf the Agent is acting. We will also need
              to verify the authorization with the consumer.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              For <Text style={styles.bold}>“household”</Text> requests subject
              to the CCPA, we will need to verify each household Member’s
              individual identity and current status as household members.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              And we will not process any requests of children under 13 years of
              age without verifiable consents from their parents or legal
              guardians.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You can submit a maximum number of 2 requests over a period of 12
              months.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              We will not respond to or process any unverified request. This is
              all done to protect your confidentiality and ensure, to the best
              of our ability, that we only process such requests for the right
              persons.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Changes To The Privacy Policy</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Includes Health’s Sites are continually under development and
              changes to the Sites or Services may be made at any time. We
              reserve the right to revise or remove any part of this Policy in
              its sole discretion at any time and without prior notice to you by
              updating this posting, unless such notice is required by relevant
              law or regulation. Thus, you should visit this page periodically
              for changes. Any changes to this Policy are effective upon posting
              to the Sites, unless otherwise specified. If you disagree with the
              Policy, your sole remedy is to discontinue your use of the Sites
              and Services. Your continued use after a change has been posted
              constitutes your acceptance of the changes.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              All capitalized terms in this Privacy Policy not defined herein
              shall have the meaning set forth in our Terms of Service.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Contact Us</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              If you have questions or concerns about these Terms, or would like
              to report a violation, see the below contact options:
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              You may contact us by mail at:
            </Text>
          </View>
          <Text style={[styles.textColor, styles.left, styles.top2]}>
            WeightLoss On Demand
          </Text>
          <Text style={[styles.textColor, styles.left, styles.top]}>
            14208 S. Crater Lake Court, suite 300
          </Text>
          <Text style={[styles.textColor, styles.left, styles.top3]}>
            The Woodlands, 77384
          </Text>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              You may email us at{' '}
              <Text style={styles.link}>support@weightlossondemand.com</Text>
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              If you are registered, you may submit a message through the "chat"
              experience once logged-in.
            </Text>
          </View>
          <View style={[styles.row, styles.paddingBottom2]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Or you may call our general support toll free line at (281)3250066
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
