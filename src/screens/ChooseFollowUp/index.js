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
import images from '../../services/utilities/images';
import {styles} from './style';
import {colors, sizes} from '../../services';
import Swiper from 'react-native-swiper';

export default function ChooseFollowUp() {
  return (
    <SafeAreaView>
      <Header title={'Choose a Follow-up'} textCenter={true} />
      <ScrollView>
        <View style={styles.color}>
          <View style={styles.userView}>
            <View style={[styles.padding]}>
              <Text style={styles.findingText}>
                Select a time for your visit.
              </Text>
            </View>
            <View style={styles.imageView}>
              <Image source={images.doctor} style={styles.docImg} />
              <Swiper
              autoplay={true}
            //   showsButtons={true}
              scrollEnabled={true}
              horizontal={true}
              pagingEnabled={true}
            //   buttonWrapperStyle={{color:colors.secondary}}
                // autoplay={true}
                // pinchGestureEnabled={true}
                style={styles.wrapper}
                autoplayTimeout={10}
                showsPagination={false}>
                <View>
                  <View style={styles.row}>
                    <Text style={styles.head}>Friday, Sep 30</Text>
                    <View style={styles.left}>
                      <TouchableOpacity >
                        <Text style={styles.symbol}> ›</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.border}></View>

                  <View style={[styles.padding, styles.paddingTop]}>
                    <Text style={styles.text}>
                      Looks like Dr. Kimberly Townsend-Scott has no availability
                      at this time. Choose another day or expand to all
                      providers.
                    </Text>
                  </View>
                  <View style={styles.noBtn}>
                    <TouchableOpacity
                    //   onPress={toggleModal}
                    >
                      <View style={styles.buttonView1}>
                        <Text style={styles.buttonText}>
                          Saturday, Oct 1 (7 times)
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                    //   onPress={toggleModal}
                    >
                      <View style={styles.buttonView1}>
                        <Text style={styles.buttonText}>
                          Expand to all providers
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <View style={styles.row}>
                    <View style={styles.right}>
                      <TouchableOpacity>
                        <Text style={styles.symbol}> ‹</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.head}>Saturday, Oct 1</Text>
                    <View style={styles.left}>
                      <TouchableOpacity>
                        <Text style={styles.symbol}> ›</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.border}></View>

                  <View style={[styles.padding, styles.paddingTop]}>
                    <Text style={styles.text2}>AFTERNOON</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>7:00 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>4:30 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={[styles.padding]}>
                    <Text style={styles.text2}>EVENING</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>5:00 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>5:00 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>6:30 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>7:30 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>8:00 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>8:30 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.paddingTop}>
                    <TouchableOpacity
                    //   onPress={toggleModal}
                    >
                      <View style={styles.buttonView1}>
                        <Text style={styles.buttonText}>
                          Expand to all providers
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <View style={[styles.row]}>
                    <View style={styles.right}>
                      <TouchableOpacity>
                        <Text style={styles.symbol}> ‹</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.head}>Sunday, Oct 2</Text>
                    <View style={styles.left}>
                      <TouchableOpacity>
                        <Text style={styles.symbol}> ›</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.border}></View>
                  <View style={styles.noBtn}>
                    <TouchableOpacity
                    //   onPress={toggleModal}
                    >
                      <View style={styles.buttonView1}>
                        <Text style={styles.buttonText}>
                          View earlier times
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={[styles.padding]}>
                    <Text style={styles.text2}>AFTERNOON</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>4:00 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>4:30 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={[styles.padding]}>
                    <Text style={styles.text2}>EVENING</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>5:00 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>6:30 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>7:30 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>8:00 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>8:30 PM</Text>
                      <View>
                        <Text style={styles.symbol2}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.noBtn}>
                    <TouchableOpacity
                    //   onPress={toggleModal}
                    >
                      <View style={styles.buttonView1}>
                        <Text style={styles.buttonText}>
                          Expand to all providers
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <View style={[styles.row]}>
                    <View style={styles.right}>
                      <TouchableOpacity>
                        <Text style={styles.symbol}> ‹</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.head}>Sunday, Oct 2</Text>
                    <View style={styles.left}>
                      <TouchableOpacity>
                        <Text style={styles.symbol}> ›</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.border}></View>
                  <View style={styles.noBtn}>
                    <TouchableOpacity
                    //   onPress={toggleModal}
                    >
                      <View style={styles.buttonView1}>
                        <Text style={styles.buttonText}>
                          View earlier times
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.noBtn}>
                    <TouchableOpacity
                    //   onPress={toggleModal}
                    >
                      <View style={styles.buttonView1}>
                        <Text style={styles.buttonText}>
                          Expand to all providers
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </Swiper>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
