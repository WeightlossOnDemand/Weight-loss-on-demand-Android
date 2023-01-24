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
import Octicons from 'react-native-vector-icons/Octicons';

import {colors} from '../../services';

export default function NoticeOfPrivacy() {
  return (
    <SafeAreaView>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView style={styles.color}>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>
            Weight Loss On Demand Professionals Notice of Privacy Practices
          </Text>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.textColor]}>
              Effective Date: <Text style={styles.regular}>April 15, 2022</Text>
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.textColor]}>
              THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE
              USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION.
              PLEASE REVIEW IT CAREFULLY.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              WeightLoss On Demand (“{' '}
              <Text style={[styles.bold]}>weightloss On Demand</Text>”) operates the
              websites located at{' '}
              <Text style={[styles.link]}> weightlossondemand.com</Text>, and
              other websites, products, services, and mobile applications with
              links to this Notice of Privacy Practices, including without
              limitation the Weight Loss On Demand webpages and applications
              (collectively, the “<Text style={[styles.bold]}>Sites</Text>” or “
              <Text style={[styles.bold]}>Websites</Text>”, unless otherwise
              specified). Users of the Sites or Services are referred below as “
              <Text style={[styles.bold]}>Users</Text>”, “
              <Text style={[styles.bold]}>Members</Text>”, “
              <Text style={[styles.bold]}>you</Text>”, “{' '}
              <Text style={[styles.bold]}>Members</Text> “
              <Text style={[styles.bold]}>your</Text>”, or “
              <Text style={[styles.bold]}>yours</Text>”.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              Weightloss On Demand offers online telehealth services enabling our
              Members to report their health history and engage independent
              healthcare professionals (“
              <Text style={[styles.bold]}>Healthcare Professionals</Text>”) to
              obtain medical and healthcare services, as well as provide
              behavioral health coaching from Coaches (“
              <Text style={[styles.bold]}>Coaches</Text>”) who do not provide
              professional or clinical services.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              The Healthcare Professionals who deliver Services through Included
              Health are independent professionals practicing within several
              groups of independently owned professional practices. The
              practices that are subject to this Notice include Weight Loss on
              Demand Professionals of California, P.C.; Weight Loss on Demand
              Professionals of Illinois Basu, Ltd.; Innovative Medical Practice
              of Massachusetts, P.C.; Weight Loss on Demand Professionals of
              Michigan, P.C.; Innovative Medical Practice of North Carolina,
              P.C.; Weight Loss on Demand Professionals of New Jersey, P.C.;
              Innovative Medical Practice of New York, P.C.; and Weight Loss on
              Demand Professionals of Texas, P.A. These practices are
              collectively known as{' '}
              <Text style={[styles.bold]}>
                Weight Loss On Demand Professionals
              </Text>
              ” (“<Text style={[styles.bold]}>us</Text>”, “
              <Text style={[styles.bold]}>we</Text>”, “
              <Text style={[styles.bold]}>our</Text>”).
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              This Notice of Privacy Practices or “
              <Text style={[styles.bold]}>Notice</Text>” describes how Weight
              Loss On Demand Professionals may use and disclose your health
              information and how you can access this information. The Weight
              Loss on Demand Professionals are part of an organized health care
              arrangement (OHCA). Your health information may be shared among
              the Weight Loss on Demand Professionals as necessary to carry out
              treatment, payment, and/or health care operations related to the
              OHCA. All participants in the OHCA arrangement are required to
              abide by this Notice.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>
              How is patient privacy protected?
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              We understand that information about you and your health is
              personal. By “
              <Text style={[styles.bold]}>health information,</Text>” we mean
              protected health information as defined under federal law (the
              Health Insurance Portability and Accountability Act, or HIPAA, and
              its implementing regulations). Not only is it our legal
              obligation, but it is our business imperative to ensure the
              confidentiality of your health information. We continuously seek
              to safeguard your health information through administrative,
              physical, and technical means, and otherwise abide by applicable
              federal and state laws.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>
              How do we collect and maintain your health information?
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              The health information that we collect or maintain may include:
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Your name, age, email address, username, password, and other
              registration information.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Health information that you provide us, which may include
              information or records relating to your medical or health history,
              health status and laboratory testing results, diagnostic images,
              and other health related information.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Health information about you prepared or obtained by the
              Healthcare Professionals(s) who provide clinical services through
              the Site such as medical and therapy records, treatment and
              examination notes, and other health related information.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Billing information that you provide us, such as credit card
              information, or that we receive from a health plan, employer or
              other provider of healthcare benefits on your behalf.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Information from Apple HealthKit, to the extent you choose to sync
              your HealthKit data with us. It is used by our Healthcare
              Professionals and clinical support staff for purposes related to
              clinical care and healthcare management. We do not use or disclose
              HealthKit data for advertising, marketing, or other use-based data
              mining purposes other than improving health management.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>
              How do we use and disclose health information?
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              We use and disclose your health information for the normal
              business activities that the law sees as falling in the categories
              of treatment, payment and healthcare operations. Generally, we do
              not need your permission for these disclosures under applicable
              laws. Below we provide examples of those activities, although not
              every use or disclosure falling within each category is listed:
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              <Text style={[styles.bold]}> Treatment – </Text> We keep a record
              of the health information you provide us. This record may include
              your test results, diagnoses, medications, your response to
              medications or other therapies, and information we learn about
              your medical condition through the Services. For example, we may
              disclose this information so that other doctors, nurses, and
              entities such as laboratories can meet your healthcare needs.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              <Text style={[styles.bold]}> Payment – </Text> We document the
              services and supplies you receive when we are providing care to
              you so that you, your insurance company or another third party can
              pay us. For example, we may tell your health plan about upcoming
              treatment or services that require prior approval by your health
              plan.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              <Text style={[styles.bold]}> Health Care Operations – </Text>{' '}
              Health information is used to improve the services we provide, to
              train staff, for business management, quality assessment and
              improvement, and for customer service. For example, we may use
              your health information to review our treatment and services and
              to evaluate the performance of our staff in caring for you.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            {/* <Text style={[styles.textColor, styles.right]}>
              When using the Sites or Services, your information will be shared
              with Included Health for the purposes stated in the Included
              Health <Text style={[styles.link]}>Privacy Policy</Text> and
              Weight Loss On Demand{' '}
              <Text style={[styles.link]}>Privacy Policy</Text>, where
              applicable and legally permissible.
            </Text> */}
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              We may share your information with your health plan, including in
              connection with their audit or review of the services we provide,
              such as our handling of customer calls or inquiries and recordings
              of such for quality assurance purposes. This may include
              information relating to genetic testing, substance abuse, mental
              health, communicable diseases and other health conditions, subject
              to the terms in this Notice.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              We may also use and disclose your health information to:
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Comply with federal, state or local laws that require disclosure.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Assist in public health activities such as tracking diseases or
              medical devices.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Inform government authorities to protect victims of abuse or
              neglect.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Comply with federal and state health oversight activities such as
              fraud investigations.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Respond to law enforcement officials or to judicial orders,
              subpoenas or other processes.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Inform coroners, medical examiners and funeral directors of
              information necessary for them to fulfill their duties—for example
              to identify a deceased person, determine a cause of death, or as
              authorized by law.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Facilitate organ and tissue donation or procurement.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Conduct research following internal review protocols to ensure the
              balancing of privacy and research needs.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Avert a serious threat to health or safety.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Assist in specialized government functions such as national
              security, intelligence and protective services.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Inform military and veteran authorities if you are an armed forces
              member (active or reserve).
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Inform a correctional institution, if you are an inmate, of
              information necessary for the institution to provide you with
              health care or protect your health and safety, the health and
              safety of others, or the safety and security of the institution.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Inform workers’ compensation carriers or your employer if you are
              injured at work, as authorized by or to the extent necessary to
              comply with state workers compensation laws.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Recommend treatment alternatives.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Tell you about health-related products and services.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Communicate within our organization for treatment, payment, or
              healthcare operations.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Communicate with other providers, health plans, or their related
              entities for their treatment or payment activities, or health care
              operations activities relating to quality assessment and
              improvement, care coordination and the qualifications and training
              of healthcare professionals.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Provide information to other third parties with whom we do
              business, such as a record storage provider. However, you should
              know that in these situations, we require third parties to provide
              us with assurances that they will safeguard your information.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Participate in health information exchanges (“
              <Text style={styles.bold}>HIEs</Text>”). HIEs enable organizations
              participating in your care, such as hospitals, labs, and doctors,
              to electronically share your health information for treatment,
              payment, health care operations, and other lawful purposes. In
              some states, you have the right to opt-in or opt-out of the
              inclusion of your health information in an HIE. We may provide
              your health information in accordance with applicable law to the
              HIEs in which we participate.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              We may also use or disclose your personal or health information
              for operational purposes. For example, we may communicate with
              individuals involved in your care or payment for that care, such
              as family or guardians and send appointment reminders.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              All other uses and disclosures, not previously described, may only
              be done with your written authorization. We will also obtain your
              authorization before we use or disclose your health information
              for marketing purposes or before we would sell your information.
              You may revoke your authorization at any time; however, this will
              not affect prior uses and disclosures. In some cases state law may
              require that we apply extra protections to some of your health
              information.
            </Text>
            <View style={styles.top}>
              <Text style={styles.subHeading}>
                What are the Healthcare Professional’s Responsibilities?
              </Text>
            </View>
            <View style={[styles.top2]}>
              <Text style={[styles.bold, styles.dashed]}>-</Text>
            </View>
          </View>
          <View style={styles.top2}>
            <Text style={[styles.textColor]}>We are required by law to:</Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Maintain the privacy of your health information.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Provide this Notice of our duties and privacy practices.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Abide by the terms of the Notice currently in effect.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Tell you if there has been a breach that compromises your health
              information.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              We reserve the right to change our privacy practices, and make the
              new practices effective for all the information we maintain.
              Revised notices will be posted on the Site.
            </Text>
          </View>
          <View style={styles.top}>
            <Text style={styles.subHeading}>
              Do you have any Federal Rights?
            </Text>
          </View>
          <View style={[styles.top2]}>
            <Text style={[styles.bold, styles.dashed]}>-</Text>
          </View>
          <View style={styles.top2}>
            <Text style={[styles.textColor]}>The law entitles you to:</Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Inspect and copy certain portions of your health information. We
              may deny your request under limited circumstances. You may request
              that we provide your health records to you in an electronic
              format.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Request amendment of your health information if you feel the
              health information is incorrect or incomplete. However, under
              certain circumstances we may deny your request.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Receive an accounting of certain disclosures of your health
              information made for the prior six (6) years, although this
              excludes certain disclosures for treatment, payment, and health
              care operations. (Fees may apply to this request.)
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Request that we restrict how we use or disclose your health
              information. However, we are not required to agree with your
              requests, unless you request that we restrict information provided
              to a payor, the disclosure would be for the payor’s payment or
              healthcare operations, and you have paid for the health care
              services completely out of pocket.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Request that we communicate with you at a specific telephone
              number or address.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Obtain a paper copy of this notice even if you receive it
              electronically.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              To make any of these requests, please note the following:
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Member privacy is very important to us. As a result, before we
              process any requests we first must verify your identity and ensure
              we have enough information. This require you to submit a “
              <Text style={styles.bold}>verifiable request,</Text>” including:
            </Text>
          </View>
          <View style={[styles.row, styles.textLeft]}>
            <Octicons
              name="dot"
              color={colors.primary}
              size={15}
              style={styles.top2}
            />
            <Text style={[styles.textColor, styles.textWidth]}>
              providing sufficient information that allows us to reasonably
              verify you are the person about whom we collected personal
              information or an authorized representative; and
            </Text>
          </View>
          <View style={[styles.row, styles.textLeft]}>
            <Octicons
              name="dot"
              color={colors.primary}
              size={15}
              style={styles.top2}
            />
            <Text style={[styles.textColor, styles.textWidth]}>
              describing your request with sufficient detail that allows us to
              properly understand, evaluate, and respond to it.
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Requests from Members are considered verified if submitted using
              through the Services. If you are an existing Member, please submit
              your request either by calling us and confirming your identity, or
              by submitting via the application (e.g., using the chat service,
              or via an open case). If, however, there is indication or
              suspicion of fraud or other malicious activity on the Member’s
              account, we may suspend reliance on these verification methods and
              defer to other methods to confirm authenticity.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              You may alternatively contact us via the information provided
              below. However, please note that emailed requests are not
              considered verified, and we may request additional information
              from you (that we would already have in our records) in order to
              confirm your identity.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              We will not respond to or process any unverified request. This is
              all done to protect your confidentiality and ensure, to the best
              of our ability, that we only process such requests for the right
              persons.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>
              What if I have a complaint or want to contact you?
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              If you believe that your privacy has been violated, you may file a
              complaint with us or with the Secretary of Health and Human
              Services in Washington, D.C. We will not retaliate or penalize you
              for filing a complaint with us or the Secretary.
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              You may contact us by mail at:
            </Text>
          </View>
          <Text style={[styles.textColor, styles.left, styles.top2]}>
            Weightloss On Demand
          </Text>
          <Text style={[styles.textColor, styles.left, styles.top]}>
            14208 S. Crater Lake Court, suite 300
          </Text>
          <Text style={[styles.textColor, styles.left, styles.top3]}>
            The Woodlands, 77384
          </Text>
        </View>
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
        <View style={[styles.row]}>
          <Entypo name="dot-single" color={colors.primary} size={25} />
          <Text style={[styles.textColor, styles.right]}>
            Or you may call our general support toll free line at (281)3250066
          </Text>
        </View>
        <View style={[styles.padding]}>
          <Text style={styles.textColor}>
            To file a complaint with the Secretary of Health and Human Services
            write to 200 Independence Ave., S.E., Washington, D.C. 20201, call
            (365) 154-1736, or file an online complaint at
            <Text style={styles.link}>
              https://ocrportal.hhs.gov/ocr/smartscreen/main.jsf.
            </Text>
          </Text>
        </View>
        <View style={[styles.paddingTop, styles.paddingLeft]}>
          <Text style={styles.subHeading}>Who will follow this Notice?</Text>
        </View>
        <View style={[styles.padding]}>
          <Text style={styles.textColor}>
            This Notice describes the health care practices of:
          </Text>
        </View>
        <View style={[styles.row]}>
          <Entypo name="dot-single" color={colors.primary} size={25} />
          <Text style={[styles.textColor, styles.right]}>
            Any Healthcare Professional authorized to access and/or enter
            information into your health record;
          </Text>
        </View>
        <View style={[styles.row]}>
          <Entypo name="dot-single" color={colors.primary} size={25} />
          <Text style={[styles.textColor, styles.right]}>
            All departments and units of Weight Loss On Demand and Weight Loss
            On Demand Professionals through which online health services are
            provided; and
          </Text>
        </View>
        <View style={[styles.row, styles.paddingBottom2]}>
          <Entypo name="dot-single" color={colors.primary} size={25} />
          <Text style={[styles.textColor, styles.right]}>
            All affiliates and volunteers.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
