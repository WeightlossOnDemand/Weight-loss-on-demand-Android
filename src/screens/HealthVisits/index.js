import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import React, {useRef, useState} from 'react';
import {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../components/Header';
import {recentVisit} from '../../services/utilities/api/auth';
import images from '../../services/utilities/images';
import {styles} from './style';
import Loader from '../../components/Loader';

export default function HealthVisits({navigation}) {
  const [trainer, setTrainer] = useState();
  const [user, setUser] = useState();
  const [visit, setVisit] = useState('');
  const [error, setError] = useState(false);
  const isVisible = useIsFocused();
  const [loader, setLoader] = useState(false);

  const token = useSelector(state => state.token);

  useEffect(() => {
    getPastVisit();
  }, [isVisible]);

  const getPastVisit = async () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await recentVisit(token);
        console.log(response.data);
        if (response.data.message) {
          setLoader(false);
          setError(true);
        }
        setVisit(response.data.visit);
        setTrainer(response.data.trainer[0]);
        setUser(response.data.user);
        setLoader(false);
      } catch (error) {
        if (error.message.includes('500')) {
          setError(true);
          setLoader(false);
        }
      }
    }, 100);
  };
  const onPress = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView>
      <View>
        <Header title={'Recent Sessions'} done={true} onPress={onPress} />
      </View>
      <ScrollView style={styles.color}>
        {/* {!error ? ( */}
        {visit ? (
          <View style={styles.marginTop}>
            <View style={[styles.left, styles.top]}>
              <Text style={styles.head}>MY RECENT SESSIONS</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('VisitDetail')}>
              <View style={[styles.card]}>
                <View style={styles.row}>
                  <Image
                    source={{uri: trainer?.images}}
                    style={styles.providerImg}
                  />
                  <Text style={styles.cardText}>{trainer?.tr_name}</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.date}>
                    {/* {moment(visit?.created_at).format('DD/MM/YYYY')} */}
                    {moment(visit?.created_at).format('ddd')},{' '}
                    {moment(visit?.created_at).format('MMM')}{' '}
                    {moment(visit?.created_at).format('DD')}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.contentView}>
            <Text style={styles.text}>You haven't had any sessions yet.</Text>
          </View>
        )}

        {/* ) : ( */}

        {/* )} */}
        {loader && <Loader />}
      </ScrollView>
    </SafeAreaView>
  );
}
