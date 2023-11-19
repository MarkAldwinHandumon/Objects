import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, ScrollView, Button, Image } from 'react-native';
import { styles } from './styles/style';

const ImageEvent = [
  {
    firstName: 'Chariz',
    lastName: 'Baco',
    nickname: 'Gwapa',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/aa.jpg'), 
  },
  {
    firstName: 'James',
    lastName: 'Noble',
    nickname: 'Mage User',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/bb.jpg'), 
  },
  {
    firstName: 'John Carlo',
    lastName: 'Razon',
    nickname: 'Kicker',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/cc.jpg'), 
  },
  {
    firstName: 'Rodel',
    lastName: 'Jawa',
    nickname: 'Tank User',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/dd.jpg'), 
  },
  {
    firstName: 'Jovert',
    lastName: 'Davirao',
    nickname: 'Verting',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/ee.jpg'), 
  },
  {
    firstName: 'Jess Raphael',
    lastName: 'Jumawan',
    nickname: 'Crazy Guy',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/ff.jpg'), 
  },
  {
    firstName: 'John Mark',
    lastName: 'Lagrimas',
    nickname: 'Cute Roller',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/gg.jpg'), 
  },
  {
    firstName: 'Mc Aldwin',
    lastName: 'Handumon',
    nickname: 'Expert',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/hh.jpg'), 
  },
];

const Numberlists = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedUser(item);
      setModalVisible(true);
    }}>
      <Text style={styles.nickname}>{item.nickname}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <Text style={styles.pt}>TEAM GEEKS OF IT</Text>
      <FlatList
        data={ImageEvent}
        keyExtractor={(item) => item.nickname}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          {selectedUser && (
            <ScrollView>
              <Text style={styles.fullName}>
                {selectedUser.firstName} {selectedUser.lastName}
              </Text>
              <Text>Nickname: {selectedUser.nickname}</Text>
              <Text>Course: {selectedUser.course}</Text>
              <Text>Year: {selectedUser.year}</Text>
              {selectedUser.image && <Image source={selectedUser.image} style={{ width: 200, height: 200 }} />}
              <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
            </ScrollView>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default Numberlists;
