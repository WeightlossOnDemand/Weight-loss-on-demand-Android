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
import {Checkbox} from 'react-native-paper';
import {colors} from '../../services';
import Pdf from 'react-native-pdf';
import {useEffect} from 'react';
import Loader from '../../components/Loader';

export default function GenerateReciept() {
  const [checked, setChecked] = useState(true);
  const [detailReceipt, setDetailReceipt] = useState(false);
  const [test, setTest] = useState('');
  const [loader, setLoader] = useState(true);
  const source = {uri: 'https://dashboard.weightlossondemand.com/backend/api/receipt'};

  const generateReciept = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  };
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Header title={'Reciept'} done={true} />
      </View>

      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Pdf
            trustAllCerts={false}
            source={source}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
          />
        </View>
        {/* <View style={styles.padding}>
          <Text style={styles.head}>Choose a type of receipt</Text>
        </View>
        <View style={[styles.row, styles.padding]}>
          <View style={{bottom: 5}}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(true);
                setDetailReceipt(false);
              }}
              color={'#be1d2d'}
              uncheckColor={colors.secondary}
            />
          </View>
          <View>
            <Text style={styles.head2}>Simple Reciept</Text>
            <Text style={styles.text}>
              Includes basics like cost, date of session, and consultant name
            </Text>
          </View>
        </View>
        
        <View style={styles.paddingTop}>
          <TouchableOpacity onPress={generateReciept}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Generate Reciept</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        {loader && <Loader />}

      </ScrollView>
    </SafeAreaView>
  );
}
