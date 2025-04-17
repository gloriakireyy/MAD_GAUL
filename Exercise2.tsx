// Name         : Hizkia Gaynell Pascal Siregar
// Date         : Selasa, 18 February 2025
// Description  : MAD - Exercise 2

// 1. Import core components from react-native
import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

// 2. Create the component
const Exercise2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Biodata</Text>

      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={require('./assets/profile.png')}
        />
      </View>

      <Text style={styles.sectionTitle}>Informasi Pribadi</Text>
      <Text style={styles.text}>Nama: Hizkia Gaynell Pascal Siregar</Text>
      <Text style={styles.text}>
        Alamat: RW.Asabri 2, West Wangurer, Girian, Bitung City, North Sulawesi
      </Text>
      <Text style={styles.text}>Tanggal Lahir: 10 April 2004</Text>
      <Text style={styles.text}>Nomor Telepon: 0813-XXXX-XXXX</Text>

      <Text style={styles.sectionTitle}>Pendidikan</Text>
      <Text style={styles.text}>- SD Katolik Don Bosco Bitung</Text>
      <Text style={styles.text}>- SMP Katolik Don Bosco Bitung</Text>
      <Text style={styles.text}>- SMA Katolik Don Bosco Bitung</Text>
      <Text style={styles.text}>- Universitas Klabat</Text>

      <Text style={styles.sectionTitle}>Minat dan Hobi</Text>
      <Text style={styles.text}>- Kerajinan Tangan</Text>
      <Text style={styles.text}>- Membaca buku</Text>
      <Text style={styles.text}>- Menulis Cerita</Text>
      <Text style={styles.text}>- Mendengarkan musik</Text>
      <Text style={styles.text}>- Memasak</Text>

      <Text style={styles.sectionTitle}>Skills</Text>
      <Text style={styles.text}>- Pemrograman</Text>
      <Text style={styles.text}>(Python, C#, HTML, JavaScript)</Text>
      <Text style={styles.text}>- Desain UI/UX</Text>
      <Text style={styles.text}>- Menulis Kreatif & Storytelling</Text>

      <Text style={styles.sectionTitle}>Fun Facts & Favorites 🎉</Text>
      <Text style={styles.text}>💡 Buku Favorit: The Son of Neptune</Text>
      <Text style={styles.text}>🎬 Film Favorit: Pitch Perfect</Text>
      <Text style={styles.text}>🎵 Lagu Favorit: Another Day of Sun</Text>
      <Text style={styles.text}>🎭 Musikal Favorit: Ride the Cyclone</Text>
      <Text style={styles.text}>📚 Genre Buku yang Disukai: Romance</Text>
      <Text style={styles.text}>🍽 Makanan favorit: Batagor</Text>
    </ScrollView>
  );
};

// 3. Export component
export default Exercise2;

// 4. Styling
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#FFD700',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#FFD700',
    padding: 8,
    borderRadius: 5,
    marginTop: 15,
    textAlign: 'center',
    width: '100%',
  },
  text: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
  },
  photoContainer: {
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  photo: {
    width: 380,
    height: 380,
    borderRadius: 5,
    borderWidth: 2,
  },
});
