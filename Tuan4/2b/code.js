import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

export default function App() {
  const [comment, setComment] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Image
          style={{ height: 60, width: 70 }}
          source={require('./assets/usb.png')}
        />
        <Text style={styles.textProduct}>
          USB Bluetooth Music Receiver {'\n'}HJX-001 - Biến loa thường thành loa{' '}
          {'\n'}Bluetooth
        </Text>
      </View>
      <View style={styles.evaluate}>
        <Text style={styles.textEvaluate}>Cực kỳ hài lòng</Text>
        <Image
          style={{ width: '120%', height: 30 }}
          source={require('./assets/star.png')}
        />
        <View style={styles.addImage}>
          <TouchableOpacity style={styles.styleTouch}>
            <Text style={{ fontWeight: 'bold' }}>Thêm hình ảnh</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputComment}>
        <View style={styles.textInputContainer}>
          {comment === '' && (
            <Text style={styles.placeholderText}>
              Hãy chia sẻ những điều mà bạn thích về sản phẩm
            </Text>
          )}
          <TextInput
            style={styles.textInput}
            onChangeText={setComment}
            multiline={true}
            value={comment}
          />
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center',marginTop:50}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#0d5db6',
              paddingVertical: 15,
              paddingHorizontal: 133,
              borderRadius:5
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textProduct: {
    marginLeft: 5,
    fontWeight: '700',
  },
  evaluate: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginVertical: 20,
  },
  textEvaluate: {
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 10,
  },
  addImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  styleTouch: {
    paddingVertical: 15,
    width: 310,
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#1511eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputComment: {
    width: '80%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: '#c4c4c4',
    borderRadius: 5,
    width: 310,
    height: 150,
    padding: 10,
    position: 'relative',
  },
  placeholderText: {
    position: 'absolute',
    top: 15,
    left: 15,
    color: '#c4c4c4',
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    textAlignVertical: 'top',
    color: 'black',
    fontSize: 16,
  },
});
