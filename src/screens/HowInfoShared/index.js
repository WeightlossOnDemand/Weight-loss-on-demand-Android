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
  Linking,
} from 'react-native';
import Header from '../../components/Header';
import {colors} from '../../services';
import images from '../../services/utilities/images';
import {styles} from './style';
import Entypo from 'react-native-vector-icons/Entypo';

export default function HowInfoShare() {
  return (
    <SafeAreaView>
       <View>
          <Header title={'Medical Records'} />
        </View>
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>
            How Is My Information Shared?
          </Text>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              Health information record exchange services (“Exchange”) enable
              organizations participating in your care (e.g., medical groups,
              hospitals, labs, and others) to more easily access a patient’s
              health information, share such information and coordinate care.
              This supports organizations, such as Included Health, in better
              providing you the help you need, when you need it.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              Included Health has agreed to participate in one or more
              Exchanges, and is requesting your consent to disclose your health
              information to, and access your health information from, such
              Exchanges. Your participation in this service is entirely
              voluntary. Please read the information below carefully before
              consenting.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor]}>
              By consenting via the toggles, you authorize Included Health on
              behalf of its affiliated health care providers (“Included Health”)
              to use and/or disclose protected health information (PHI) about
              you via one or more Exchanges, as described and for the purposes
              outlined below.
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.width]}>
              <Text style={styles.bold}>
                Why are you sharing my information?
              </Text>{' '}
              Included Health would only share your information with
              organizations using an Exchange that are involved in your care for
              the purposes of providing you with medical treatment, care
              coordination and care management services, and potentially other
              uses permitted or required by applicable law and the Exchanges.
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.width]}>
              <Text style={styles.bold}>
                With whom are you sharing my information?
              </Text>{' '}
              When you are seen by Included Health, we may use an Exchange to
              request, and then pull over via a secure network, your available
              medical and behavioral health records from other institutions that
              may have provided you health services. After your visit, Included
              Health may similarly share your records with other organizations
              involved in your care for the above stated purposes.
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.width]}>
              <Text style={styles.bold}>What information may be shared?</Text>{' '}
              Information that may be shared could include basic identifiers to
              confirm your identity (name, address, DOB etc), diagnoses,
              medications, allergies, advanced directives, treating providers,
              dates of visits, patient reported family history of disease,
              immunizations, insurance information, medical equipment you may
              use, plan of care, medical issues, procedures performed, lab
              results, social history, vital signs, chart notes, and any media
              (images, PDFs, etc) related to your care and treatment. The
              information shared may relate where applicable to genetic testing,
              substance abuse, mental health, communicable diseases and other
              health conditions, subject to the terms in our Notice of Health
              Information Privacy Practices.
            </Text>
          </View>
        </View>
        <View style={styles.padding}>
          <Text style={[styles.textColor]}>
            By authorizing, you understand that:
          </Text>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.width]}>
              Included Health will not receive direct or indirect remuneration
              in exchange for disclosing health information as described above.
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.width]}>
              Your treatment, payment, enrollment, or eligibility for benefits
              will not be conditioned on whether you consent to this service.
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.width]}>
              You have a right to refuse to consent.
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.width]}>
              Your consent if given shall remain in effect until you revoke it.
              If you prefer us not to share your data with your other treating
              providers, please opt out via the toggles or by contacting
              <Text style={styles.link}> privacy@includedhealth.com</Text>.
              Please note that any health information previously shared using
              the Exchanges may remain with the providers who have accessed that
              information.
            </Text>
          </View>
        </View>
        <View style={[styles.padding,styles.bottom]}>
          <Text style={[styles.textColor]}>
            Further details about our privacy practices and related processing
            of your health information can be found in our{' '}
            <Text style={styles.link}>notice of privacy practices</Text>.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
