import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

const MyApp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#c4c4c4', paddingBottom: 80 }}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Image
          style={{ width: 90, height: 115, marginTop: 8 }}
          source={require('./assets/book.png')}
        />
        <View style={{ justifyContent: 'space-around' }}>
          <Text>Nguyên hàm tích phân và ứng dụng</Text>
          <Text>Cung cấp bởi Tiki Trading</Text>
          <Text style={{ fontSize: 20, color: 'red' }}>141.800 đ</Text>
          <Text style={{ textDecorationLine: 'line-through' }}>141.800 đ</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#c4c4c4',
                  width: 15,
                  height: 15,
                  justifyContent: 'center', // Căn giữa theo chiều dọc
                  alignItems: 'center', // Căn giữa theo chiều ngang
                }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                  -
                </Text>
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 10 }}>1</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#c4c4c4',
                  width: 15,
                  height: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ color: '#134fec' }}>
              Mua sau
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: 'white' }}>
        <Text>{'\n'}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
        }}>
        <Text>Mã giảm giá đã lưu</Text>
        <TouchableOpacity style={{ color: '#134fec' }}>
          Xem tại đây
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            borderWidth: 1,
            fontWeight: 'bold',
            paddingHorizontal: 2,
            paddingVertical: 10,
            textAlign: 'center',
          }}
          placeholder="Mã giảm Giá"
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#0d5db6',
            height: 40,
            width: 100,
          }}>
          <Text
            style={{
              padding: 10,
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}>
            Gửi
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 12,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
          Bạn có phiếu quà tặng Tiki/Got it/Urbox?
        </Text>
        <TouchableOpacity style={{ marginLeft: 7 }}>
          <Text style={{ fontSize: 14, color: 'blue', fontWeight: 'bold' }}>
            Nhập tại đây?
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 12,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 310,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Tạm tính</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>141.800đ</Text>
        </View>
      </View>
      <View style={{ flex: 2 }}></View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          marginBottom: -80,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 310,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Tạm tính</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>141.800đ</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#e53935',
            width:'95%',
            height:50,
            borderRadius: 3,
            marginTop: 25,
            justifyContent:'center',
            alignItems:'center',          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
              width: '100%',
              textAlign:'center'
            }}>
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyApp;
