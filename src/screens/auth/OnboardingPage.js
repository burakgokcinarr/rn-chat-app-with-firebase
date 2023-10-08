import { useTranslation } from 'react-i18next';
import { OnboardFlow } from 'react-native-onboard';
import { Colors, Font } from '../../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { auth } from '../../config/firebaseConfig';
import { ActivityIndicator, View } from 'react-native';

 export default OnboardingPage = () => {

    const { t }      = useTranslation();
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('home');
        } else {
          setIsLoading(false);
        }
      })
    }, [])  

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size='large' color={Colors.BLACK_COLOR_2} />
      </View>
    )
  }

  return (
    <OnboardFlow
      pages={[
        {
          title: t("page_1_title"),
          subtitle: t("page_1_subtitle"),
          imageUri: 'https://www.relativity.com/relativity/cache/file/40E7EF01-34FC-40BA-871A12D845CD2CA1.png',
          primaryButtonTitle: t("next"),
          titleStyle: {fontFamily: Font.bold, fontSize: wp(9), color: Colors.PURPLE_COLOR},
          subtitleStyle: {fontFamily: Font.regular, fontSize: wp(4), color: Colors.DARK_COLOR},
        },
        {
          title: t("page_2_title"),
          subtitle: t("page_2_subtitle"),
          imageUri: 'https://www.pngmart.com/files/16/Speech-Chat-Icon-Transparent-PNG.png',
          primaryButtonTitle: t("start"),
          titleStyle: {fontFamily: Font.bold, fontSize: wp(9), color: Colors.PURPLE_COLOR},
          subtitleStyle: {fontFamily: Font.regular, fontSize: wp(4), color: Colors.DARK_COLOR}
        }
      ]}
      type={'inline'}
      onDone={() => navigation.navigate("singin")}
      enableScroll={true}
      showDismissButton={false}
      paginationColor={Colors.PURPLE_COLOR}
      paginationSelectedColor={Colors.DARK_COLOR}
    />
  );
};