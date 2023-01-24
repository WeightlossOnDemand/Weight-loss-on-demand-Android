import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';
import {WebView} from 'react-native-webview';
import {colors} from '../../services';
import Header from '../../components/Header';
export default function EyeConditions() {
  return (
    // <View style={styles.paddingTop}>
    //         <Text style={styles.heading2}>Vomiting</Text>
    //       </View>
    <SafeAreaView>
      <Header title={'Eye Conditions'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.eyeConditions} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Eye Conditions</Text>
        </View>

        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Having an issue with one or both eyes can significantly and severely
            impact a patient's lifestyle, causing not only pain but the
            inability to carry out necessary tasks. For the eyes, getting quick,
            accurate advice is very important. There are three basic categories:
            minor issues, moderate issues that require interim care followed by
            specialist care, and severe issues.
          </Text>

          <View style={[styles.paddingTop2]}>
            <Text style={styles.textColor}>
              Diagnosing the condition and severity often begins with questions
              about pain, discharge and previous eye damage, and the collection
              of a patient's medical history. Then on camera, the physician can
              have the patient do several eye maneuvers and ask for still
              photographs to better assess the eye. The high integrity of
              photographs through the app allows the physician to see even
              better than the naked eye.
            </Text>
          </View>

          <View style={[styles.paddingTop]}>
            <Text style={styles.heading2}>Minor Conditions</Text>
          </View>
          <View style={styles.paddingTop2}>
            <Text style={styles.textColor}>
              Minor conditions like pink eye, colobomas and styes are very
              common and often treated with remedies like prescription eye
              drops, warm compresses, cold compresses, etc.
            </Text>
          </View>
          <View style={[styles.paddingTop]}>
            <Text style={styles.heading2}>Moderate Conditions</Text>
          </View>
          <View style={[styles.paddingTop2]}>
            <Text style={styles.textColor}>
              This category includes more serious conditions like a severe eye
              infection or corneal abrasion, which do not require emergency care
              but should be treated within 48 hours to avoid further damage.
              Weight Loss On Demand can provide this immediate care. For example, if
              you have a severe abrasion, the physician can order medication
              and/or a salve to help with the pain until you can see a
              specialist. Another example is Amaurosis fugax - the initial onset
              of a stroke. It often presents without pain, and can be identified
              by physicians during the Video Visit. By diagnosing this early,
              our physicians can help prevent strokes.
            </Text>
          </View>
          <View style={[styles.paddingTop]}>
            <Text style={styles.heading2}>Severe Conditions</Text>
          </View>
          <View style={[styles.paddingTop2, styles.paddingBottom]}>
            <Text style={styles.textColor}>
              For the most severe injuries, like a metal shard in your eye, you
              will absolutely need urgent, in-person care.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
