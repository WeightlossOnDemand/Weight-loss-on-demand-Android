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

export default function TermsOfService() {
  return (
    <SafeAreaView>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView style={styles.color}>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>
            Weight Loss On Demand by Included Health Terms of Service
          </Text>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.textColor]}>
              Effective Date: <Text style={styles.regular}>April 15, 2022</Text>
            </Text>
          </View>
          {/* <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.textColor]}>
              We are pleased to announce that Weight Loss
              on Demand Inc. is now part of
              Included Health, Inc.   
            </Text>
          </View> */}
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.textColor]}>
              We are working to harmonize our policies and procedures so that
              you can have access to the care you need, when you need it,
              regardless of the specific services you use.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              While the integration is in progress, all of
              the terms, agreements, statements of rights, consent forms, and
              policies referenced and linked herein as they related to the use
              of the Weight Loss on Demand, affiliated websites and any of the
              related products and services is described below
              (collectively, "Services: unless otherwise specified).
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              If you use our websites, products, or services, you should read
              these agreements carefully because they contain important
              information about how we treat your personal data and how you can
              access, change, and manage it.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              In the coming months, we want to continue updating and
              consolidating these documents to make it easier for you to
              understand what to anticipate from us and what we expect from you
              when you use our Services in light of our ongoing integration.
            </Text>
          </View>
        </View>
        {/* <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Please also note, for members of our recently-launched Included
              Health unified application, many features of the Weight Loss On
              Demand application have been integrated into the unified
              application (and many more features to come over the ensuing
              months), with the goal to provide you a seamless digital health
              experience. However, some features have not yet been incorporated,
              and you may need to visit the Weight Loss On Demand application to
              access certain of these features.
            </Text>
            <View style={[styles.paddingTop, styles.top]}>
              <View style={styles.border}></View>
            </View>
          </View>
          <View style={[styles.paddingBottom, styles.top]}>
            <Text style={styles.addPaymentText}>
              Weight Loss On Demand by {'    '} Included Health Terms of Service
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Use of the Site</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health, Inc. ("
              <Text style={styles.bold}>Included Health</Text>" "
              <Text style={styles.bold}>Company</Text>", "
              <Text style={styles.bold}>we</Text>" "
              <Text style={styles.bold}>us</Text>" or "
              <Text style={styles.bold}>our</Text>") operates the websites
              located at <Text style={styles.link}>includedhealth.com</Text> and
              <Text style={styles.link}> weightlossondemand.com</Text>, and
              other websites, products, services, and mobile applications with
              links to this Terms of Service ("
              <Text style={styles.bold}>Terms</Text>"), including without
              limitation the Weight Loss On Demand webpages and secure
              applications (collectively, the "Sites" or "Websites", unless
              otherwise specified). Users of the Sites or Services are referred
              below as "<Text style={styles.bold}></Text>Users" "
              <Text style={styles.bold}>Members</Text>" "
              <Text style={styles.bold}>you</Text>", "
              <Text style={styles.bold}>your</Text>", or "
              <Text style={styles.bold}>yours</Text>".
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              We offer online telehealth services enabling our Members to report
              their health history and engage independent healthcare
              professionals ("
              <Text style={styles.bold}>Healthcare Professionals</Text>") to
              obtain medical and healthcare services, as well as provide
              behavioral health coaching from Coaches ("
              <Text style={styles.bold}>Coaches</Text>") who do not provide
              professional or clinical services.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Please read these Terms carefully before using the Sites. By using
              and or visiting the Sites or Services, you are accepting the
              practices and provisions described in these Terms, as well as the
              Weight Loss On Demand{' '}
              <Text style={styles.link}>Privacy Policy.</Text> and other terms,
              agreements, statements of rights, consent forms, and policies
              referenced above. If you do not agree to these Terms, or any of
              the documents referenced above, please do not use the Sites or
              Services.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Where visiting or using any of our Sites or Services, including
              those previously or currently associated with Included Health
              Communities ("<Text style={styles.bold}>Communities</Text>"),
              Grand Rounds by Included Health ("
              <Text style={styles.bold}>Grand Rounds</Text>"), and Weight Loss
              On Demand by Included Health ("
              <Text style={styles.bold}>Weight Loss On Demand</Text>"), or any
              other website or mobile application that reference or link to
              these Terms, your information will also be processed by Included
              Health for the purposes stated in these Terms, the Included Health{' '}
              <Text style={styles.link}>Privacy Policy,</Text> and in accordance
              with the Weight Loss On Demand{' '}
              <Text style={styles.link}>Privacy Policy</Text> and{' '}
              <Text style={styles.link}>Notice of Privacy Practices,</Text>{' '}
              where applicable and legally permissible.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Healthcare Services</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              The Healthcare Professionals who deliver Services through Included
              Health are independent professionals practicing within a group of
              independently owned professional practices collectively known as "
              <Text style={styles.bold}>
                Weight Loss On Demand Professionals
              </Text>
              " Included Health does not practice medicine or any other licensed
              profession, and does not interfere with the practice of medicine
              or any other licensed profession by Healthcare Professionals, each
              of whom is responsible for his or her services and compliance with
              the requirements applicable to his or her profession and license.
              Neither Included Health nor any third parties who promote the
              Services or provide you with a link to the Services shall be
              liable for any professional advice you obtain from a Healthcare
              Professional via the Services.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Site Content</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              None of the Sites's content (other than information you receive
              from Healthcare Professionals) should be considered medical advice
              or an endorsement, representation or warranty that any particular
              medication or treatment is safe, appropriate, or effective for
              you.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>User Accounts</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              When you register on the Sites, you are required to create an
              account ("<Text style={styles.bold}>Account</Text>") by entering
              your name, email address, password and certain other information
              collected by Included Health (collectively "
              <Text style={styles.bold}>Account Information</Text>").
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              To create an Account, you must be of legal age to form a binding
              contract. If you are not of legal age to form a binding contract,
              you may not register to use our Services. You agree that the
              Account Information that you provide to us at all times, including
              during registration and in any information you upload to the
              Sites, will be true, accurate, current, and complete. You may not
              transfer or share your Account password with anyone, or create
              more than one Account with the exception of sub- accounts
              established for children of whom you are the parent or legal
              guardian).
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You are responsible for maintaining the confidentiality of your
              Account password and for all activities that occur under your
              Account. We reserve the right to take any and all action, as it
              deems necessary or reasonable, regarding the security of the Sites
              and your Account Information. In no event and under no
              circumstances shall we be held liable to you for any liabilities
              or damages resulting from or arising out of your use of the Sites,
              your use of the Account Information or your release of the Account
              Information to a third party. You may not use anyone else's
              account at any time.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Access Rights</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health hereby grants to you a limited, non-exclusive,
              nontransferable right to access the Sites and use the Services
              solely for your personal non-commercial use and only as permitted
              under these Terms and any separate agreements you may have entered
              into with us ("Access Rights"). We reserve the right, in our sole
              discretion, to deny or suspend use of the Sites or Services to
              anyone for any reason. You agree that you will not, and will not
              attempt to: (a) impersonate any person or entity, or otherwise
              misrepresent your affiliation with a person or entity; (b) use the
              Sites or Services to violate any local, state, national or
              international law; (c) reverse engineer, disassemble, decompile,
              or translate any software or other components of the Sites or
              Services; (d) distribute viruses or other harmful computer code
              through the Site; or (e) otherwise use the Services or Sites in
              any manner that exceeds the scope of use granted above. In
              addition, you agree to refrain from abusive language and behavior
              which could be regarded as inappropriate, or conduct that is
              unlawful or illegal, when communicating with Healthcare
              Professionals or Coaches through the Sites and to refrain from
              contacting Healthcare Professionals or Coaches for telehealth
              services outside of the Sites. We are not responsible for any
              interactions with Healthcare Professionals or Coaches that are not
              conducted through the Sites. We strongly recommend that you do not
              use the Services on public computers. We also recommend that you
              do not store your Account password through your web browser or
              other software.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Fees and Purchase Terms</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You agree to pay all fees or charges to your Account in accordance
              with the fees, charges, and billing terms in effect at the time a
              fee or charge is due and payable. By providing Included Health
              with your credit card number, PayPal or Venmo account and
              associated payment information, you agree that we are authorized
              to immediately invoice your account for all fees and charges due
              and payable to us hereunder and that no additional notice or
              consent is required. If your health plan, employer or agency has
              arranged with us to pay the fee or any portion of the fee, or if
              the fee is pursuant to some other arrangement with us, that fee
              adjustment will be reflected in the fee that you are ultimately
              charged. Please check with your employer, health plan or agency to
              determine if any Services will be reimbursed.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              If you do not have insurance coverage for Services, or if your
              coverage is denied, you acknowledge and agree that you shall be
              personally responsible for all incurred expenses. Included Health
              offers no quarantee that you shall receive any such reimbursement.
              We reserve the right to modify or implement a new pricing
              structure at any time prior to billing you for your initial
              payment or for future payments due pursuant to these Terms. You
              understand and agree that for Services provided on an appointment
              basis, you will be responsible for a missed appointment fee equal
              to all or a portion of the fees you and your insurer or other
              payor would have paid for the scheduled services if you do not
              cancel a scheduled appointment at least 24 hours in advance,
              unless we notify you in writing that a shorter cancellation window
              applies.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Termination</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You may deactivate your Account and end your registration at any
              time, for any reason by sending an email to
              <Text style={styles.link}> support@includedhealth.com.</Text>{' '}
              Included Health may suspend or terminate your use of the Sites,
              your Account and/or registration for any reason at any time.
              Subject to applicable law we reserve the right to maintain, delete
              or destroy all communications and materials posted or uploaded to
              the Sites pursuant to its internal record retention and/or content
              destruction policies. After such termination, we will have no
              further obligation to provide the Services, except to the extent
              we are obligated to provide you access to your health records or
              Healthcare Professionals are required to provide you with
              continuing care under their applicable legal, ethical and
              professional obligations to you.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Right to Modify</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health's Sites are owned and operated by Included Health.
              Our Sites are continually under development and changes to the
              Sites or Services may be made at any time. We reserve the right to
              revise or remove any part of these Terms in its sole discretion at
              any time and without prior notice to you by updating this posting
              Thus, you should visit this page periodically for changes. Any
              changes to these Terms are effective upon posting to the Sites,
              unless otherwise specified. If you disagree with the Terms, your
              sole remedy is to discontinue your use of the Sites or Services.
              Your continued use after a change has been posted constitutes your
              acceptance of the changes.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>LIMITATION OF LIABILITY</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              YOU UNDERSTAND THAT TO THE EXTENT PERMITTED UNDER APPLICABLE LAW,
              IN NO EVENT WILL INCLUDED HEALTH, INCLUDED HEALTH PROFESSIONALS OR
              THEIR RESPECTIVE SHAREHOLDERS, OFFICERS, EMPLOYEES, DIRECTORS,
              PARENTS, SUBSIDIARIES, AFFILIATES, AGENTS OR LICENSORS BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY
              DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF
              REVENUES, PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES
              ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR THE SERVICES,
              REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, TORT
              (INCLUDING NEGLIGENCE AND STRICT LIABILITY), WARRANTY, STATUTE OR
              OTHERWISE.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              To the extent that we may not, as a matter of applicable law,
              disclaim any implied warranty or limit its liabilities, the scope
              and duration of such warranty and the extent of our liability will
              be the minimum permitted under such applicable law.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Indemnification</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You agree to indemnify, defend and hold harmless Included Health.
              Weight Loss On Demand Professionals and their respective
              shareholders, officers, directors, employees, agents,
              subsidiaries, affiliates, licensors, and suppliers, harmless from
              and against any claims, actions, demands, liabilities and
              settlements, including, without limitation, reasonable legal and
              accounting fees ("Claims"), resulting from, or alleged to result
              from, your violation of these Terms.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Geographical Restrictions</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health makes no representation that all products,
              services and/or material described on the Sites, or the Services
              available through the Sites, are appropriate or available for use
              in locations outside the United States or all states and
              territories within the United States.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Disclosures</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              All Health Professionals performing licensed clinical services on
              the Sites hold the professional licenses issued by the
              professional licensing boards or agencies in the states where they
              practice. All physicians and psychologists hold advanced degrees
              in either medicine or psychology and have undergone postgraduate
              training. You can report a complaint relating to the care provided
              by a Healthcare Professional by contacting the professional
              licensing board in the state where the care was received. In the
              State of New York, complaints which relate to professional conduct
              should be made to the{' '}
              <Text style={styles.link}>
                Office of Professional Misconduct (OPMC).
              </Text>{' '}
              In a professional relationship, sexual intimacy is never
              appropriate and should be reported to the board or agency that
              licenses, registers, or certifies the licensee. You can find the
              contact information for each of the state professional licensing
              boards governing medicine on the{' '}
              <Text style={styles.link}>
                Federation of State Medical Boards website,
              </Text>{' '}
              governing psychology on the Association of State and Provincial
              Psychology Boards website, and governing{' '}
              <Text style={styles.link}>social workers.</Text>
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Any clinical records created as a result of your use of the
              Services will be securelv maintained by Included Health on behalf
              of Weight Loss On Demand Professionals for a period that is no
              less than the minimum number of years such records are required to
              be maintained under state and federal law, which is typically at
              least six years.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Website Links</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              WE WILL NOT BE LIABLE FOR ANY INFORMATION, SOFTWARE, OR LINKS
              FOUND AT ANY OTHER WEBSITE, INTERNET LOCATION, OR SOURCE OF
              INFORMATION, NOR FOR YOUR USE OF SUCH INFORMATION, SOFTWARE OR
              LINKS, NOR FOR THE ACTS OR OMISSIONS OF ANY SUCH WEBSITES OR THEIR
              RESPECTIVE OPERATORS.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Ownership</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              The Sites and their entire contents, features and functionality
              (including, but not limited to, all information, software, text,
              displays, images, video and audio, and the design, selection and
              arrangement thereof), are owned by Included Health, its licensors
              or other providers of such material and are protected by United
              States and international copyright, trademark, patent, trade
              secret and other intellectual property or proprietary rights laws.
              These Terms permit you to use the Sites for your personal, non-
              commercial use only. You must not reproduce, distribute, modify,
              create derivative works of, publicly display, publicly perform,
              republish, download, store or transmit any of the material on our
              Sites except as generally and ordinarily permitted through the
              Sites according to these Terms You must not access or use for any
              commercial purposes any part of the Sites or any services or
              materials available through the Sites.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Trademarks</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Certain of the names, logos, and other materials displayed on the
              Sites or in the Services may constitute trademarks, trade names,
              service marks or logos ("Marks") of Included Health or other
              entities. You are not authorized to use any such Marks without the
              express written permission of Included Health. Ownership of all
              such Marks and the goodwill associated therewith remains with us
              or those other entities.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Privacy and Communications</Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.heading}>Privacy </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Please see the Weight Loss On Demand
              <Text style={styles.link}> Privacy Policy</Text> for additional
              information. For more information or questions about the
              collection, creation, maintenance, use and disclosure of any of
              your data that may constitute PHI, as described above, by or on
              behalf of the Weight Loss On Demand Professionals, please refer to
              their{' '}
              <Text style={styles.link}>Notice of Privacy Practices.</Text>
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.heading}>Short Message Service or SMS </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health or its affiliates may contact you by short message
              service ("<Text style={styles.bold}>SMS</Text>") text message from
              time to time regarding your account or the Services to provide
              appointment reminders. service announcements, privacy notices,
              administrative messages and other communications about the
              Services ("<Text style={styles.bold}>SMS Communications</Text>").
              These SMS Communications are considered part of the Services and
              your account.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              By agreeing to these Terms and providing your telephone number to
              us or our affiliates, you: (i) consent to receive SMS
              Communications from or on behalf of us or any of its affiliates at
              the telephone number you provide; and (li) acknowledge and agree
              that your information may be processed in accordance with, and you
              are to be bound by, Included Health's{' '}
              <Text style={styles.link}> Privacy Policy</Text> and Weight Loss
              on Demand's <Text style={styles.link}> Privacy Policy.</Text>
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You can stop receiving SMS Communications from us at any time by
              texting "STOP" to the number from which you receive the SMS
              Communications. Alternatively, if you are registered, you may
              click <Text style={styles.link}>here</Text> to contact support or
              submit a message through the "chat" experience once logged-in. You
              may also call our general support toll free line at (365)
              154-1736. If you send the message "STOP" to us, we will send you a
              reply message to confirm that you have been unsubscribed from SMS
              Communications. After this, you will no longer receive SMS
              Communications from us. You agree that if you request to opt out
              from future SMS Communications, we may send you a one-time opt-out
              confirmation SMS text message. After this, you will no longer
              receive SMS Communications from us.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              For support: See above for instructions on calling us or text HELP
              in response to an SMS on your device. If you send us a SMS text
              message, we will reply with instructions on how to receive SMS
              Communications as well as how to unsubscribe from SMS
              Communications; if you call our toll-free number, we will provide
              this information over the phone. The number of SMS text messages
              we send as Communications will depend on the frequency of your use
              of the Services. Our SMS Communications program may not be
              available on all wireless carriers. Standard carrier message and
              data rates apply.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.heading}>Other Communications </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You agree that we may send to you additional communications
              through electronic means including, but not limited to, (1) by
              email, using the address that you provided to us during
              registration, (2) push notifications on your tablet or mobile
              device, or (3) by posting communications on the Sites
              (collectively, "<Text style={styles.bold}>Communications</Text>").
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              The delivery of any SMS or other Communications from us is
              effective when sent by us, regardless of whether you read the SMS
              or other Communication. You can withdraw your consent to receive
              Communications by deactivating your Account, or as otherwise
              specified and provided.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You acknowledge that text messages and emails are not always
              secure and there is a risk that such messages and emails will be
              intercepted because they travel over networks that we do not
              control. As such, we cannot guarantee the security or
              confidentiality of messages sent by text messages or email. By
              providing us with your cell phone number and email address, you
              agree that we may communicate with you by text message and email,
              despite these risks.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.heading}>Participating Carriers </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              AT&T, Verizon Wireless, Sprint, T-Mobile, U.S. Cellular, Boost
              Mobile, MetroPCS, Virgin Mobile, Alaska Communications Systems
              (ACS), Appalachian Wireless (EKN), Bluegrass Cellular, Cellular
              One of East Central, IL (ECIT), Cellular One of Northeast
              Pennsylvania, Cricket, Coral Wireless (Mobi PCS), COX, Cross,
              Element Mobile (Flat Wireless), Epic Touch (Elkhart Telephone),
              GCI, Golden State, Hawkeye (Chat Mobility), Hawkeye (NW Missouri),
              Illinois Valley Cellular, Inland Cellular, Wireless (lowa
              Wireless), Keystone Wireless (Immix Wireless/PC Man), Mosaic
              (Consolidated or CTC Telecom), Nex-Tech Wireless, Telos, Panhandle
              Communications, Pioneer, Plateau (Texas RSA 3 Ltd), Revol, RINA,
              Simmetry (TMP Corporation), Thumb Cellular, Union Wireless, United
              Wireless, Viaero Wireless, and West Central (WCC or 5 Star
              Wireless).
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              T-Mobile is not liable for delayed or undelivered messages.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Message and data rates may apply for any messages sent to you from
              us and to us from you. If you have any questions about your text
              plan or data plan, it is best to contact your wireless provider.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Miscellaneous</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              These Terms and your use of the Sites shall be governed by the
              laws of the State of Delaware, without giving effect to the
              principles of conflict of laws. ANY DISPUTE ARISING UNDER OR
              RELATING IN ANY WAY TO THESE TERMS OF SERVICE WILL BE RESOLVED
              EXCLUSIVELY BY FINAL AND BINDING ARBITRATION IN SAN FRANCISCO,
              CALIFORNIA UNDER THE RULES OF THE AMERICAN ARBITRATION
              ASSOCIATION, EXCEPT THAT EITHER PARTY MAY BRING A CLAIM RELATED TO
              INTELLECTUAL PROPERTY RIGHTS, OR SEEK TEMPORARY AND PRELIMINARY
              SPECIFIC PERFORMANCE AND INJUNCTIVE RELIEF, IN ANY COURT OF
              COMPETENT JURISDICTION, WITHOUT THE POSTING OF BOND OR OTHER
              SECURITY. ALL CLAIMS, WHETHER IN ARBITRATION OR OTHERWISE, MUST BE
              BROUGHT SOLELY IN YOUR INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF
              OR CLASS MEMBER IN ANY PURPORTED CLASS OR COLLECTIVE PROCEEDING.
              The parties agree to the personal and subject matter jurisdiction
              and venue of the courts located in San Francisco, California, for
              any action related to these Terms.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              No waiver by Included Health of any term or condition set forth in
              these Terms shall be deemed a further or continuing waiver of
              deemed a further or continuing waiver of such term or condition or
              a waiver of any other term or condition, and an failure of
              Included Health to assert a right or provision under these Terms
              shall not constitute a waiver of such right or provision. If any
              provision of these Terms is held by a court or other tribunal of
              competent jurisdiction to be invalid, illegal or unenforceable for
              any reason, such provision shall be eliminated or limited to the
              minimum extent such that the remaining provisions of the Terms
              will continue in full force and effect.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health devotes considerable effort to optimizing signal
              strength and diagnosis deficiencies but is not responsible for the
              internet or data bandwidth and signal of your mobile device or
              computer.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              The Digital Millennium Copyright Act of 1998 (the "
              <Text style={styles.bold}>DMCA</Text>") provides recourse for
              copyright owners who believe that material appearing on the
              Internet infringes their rights under U.S. copyright law. If you
              believe in good faith that materials appearing on the Sites
              infringe your copyright, you (or your agent) may send us a notice
              requesting that the material be removed, or access to it blocked.
              In addition, if you believe in good faith that a notice of
              copyright infringement has been wrongly filed against you, the
              DMCA permits you to send us a counter-notice. Notices and
              counter-notices must meet statutory requirements imposed by the
              DMCA. One place to find more information is the U.S. Copyright
              Office Website, currently located at
              <Text style={styles.link}>
                {' '}
                https://www.loc.gov/copyright.
              </Text>{' '}
              In accordance with the DMCA, Included Health has designated an
              agent to receive notification of alleged copyright infringement in
              accordance with the DMCA. Any written Notification of Claimed
              infringement should comply with Title 17, United States Code,
              Section 512(c)(3)(A) and should be provided in writing to Included
              Health, Inc., One California Street, Suite 2300, San Francisco, CA
              94111.
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
            Included Health, Inc.
          </Text>
          <Text style={[styles.textColor, styles.left, styles.top]}>
            1 California Street, Ste. 2300
          </Text>
          <Text style={[styles.textColor, styles.left, styles.top3]}>
            San Francisco, CA 94111
          </Text>
        </View>
        <View style={[styles.row, styles.top]}>
          <Entypo name="dot-single" color={colors.primary} size={25} />
          <Text style={[styles.textColor, styles.right]}>
            You may email us at{' '}
            <Text style={styles.link}>support@includedhealth.com.</Text>
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
            Or you may call our general support toll free line at (365) 154-1736
          </Text>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
