import { useTranslation } from 'react-i18next';
import { OnboardFlow } from 'react-native-onboard';
import { Colors, Font } from '../../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

 export default OnboardingPage = () => {

    const { t }      = useTranslation();
    const navigation = useNavigation();

  return (
    <OnboardFlow
      pages={[
        {
          title: t("page_1_title"),
          subtitle: t("page_1_subtitle"),
          imageUri: 'https://www.relativity.com/relativity/cache/file/40E7EF01-34FC-40BA-871A12D845CD2CA1.png',
          primaryButtonTitle: t("next"),
          titleStyle: {fontFamily: Font.bold, fontSize: wp(9), color: Colors.PURPLE_COLOR},
          subtitleStyle: {fontFamily: Font.regular, fontSize: wp(5), color: Colors.DARK_COLOR},
        },
        {
          title: t("page_2_title"),
          subtitle: t("page_2_subtitle"),
          imageUri: 'https://previews.123rf.com/images/grasycho/grasycho1405/grasycho140500011/28497265-speech-bubble-shaped-word-cloud-chat-concept.jpg',
          primaryButtonTitle: t("start"),
          titleStyle: {fontFamily: Font.bold, fontSize: wp(9), color: Colors.PURPLE_COLOR},
          subtitleStyle: {fontFamily: Font.regular, fontSize: wp(5), color: Colors.DARK_COLOR}
        }
      ]}
      type={'fullscreen'}
      onDone={() => navigation.navigate("singin")}
      enableScroll={true}
      showDismissButton={false}
      paginationColor={Colors.PURPLE_COLOR}
      paginationSelectedColor={Colors.DARK_COLOR}
    />
  );
};