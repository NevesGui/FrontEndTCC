import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { DatabaseConnection } from '../database/database-connection';

const db = DatabaseConnection.getConnection();

const RegisterAnimal = ({ navigation }) => {
  let [AnimalName, setAnimalName] = useState('');
  let [TipoAnimal, setTipoAnimal] = useState('');
  let [AniGenero, setAniGenero] = useState('');
  let [AniRaca, setAniRaca] = useState('');
  let [AniCor, setAniCor] = useState('');
  let [AniDoenca, setAniDoenca] = useState('');
  let [AniVacina, setAniVacina] = useState('');
  let [AniPersonalidade, setAniPersonalidade] = useState('');
  

  let register_Animal = () => {
    console.log(AnimalName, TipoAnimal, AniGenero, AniRaca, AniCor, AniDoenca, AniVacina, AniPersonalidade);

    if (!AnimalName) {
      alert('Por favor preencha o nome !');
      return;
    }
    if (!TipoAnimal) {
      alert('Por favor preencha o tipo de animal');
      return;
    }
    if (!AniGenero) {
      alert('Por favor preencha o gênero do animal !');
      return;
    }
    if (!AniRaca) {
      alert('Por favor preencha a raça do animal !');
      return;
    }
    if (!AniCor) {
      alert('Por favor preencha a cor do animal !');
      return;
    }
    if (!AniDoenca) {
      alert('Por favor preencha as vacinas do animal !(colocar apenas "." se não tiver');
      return;
    }
    if (!AniVacina) {
      alert('Por favor preencha as vacinas do animal !(colocar apenas "." se não tiver');
      return;
    }
    if (!AniPersonalidade) {
      alert('Por favor preencha a personalidade do animal !');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [AnimalName, TipoAnimal, AniGenero, AniRaca, AniCor, AniDoenca, AniVacina, AniPersonalidade],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Usuário Registrado com Sucesso !!!',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Erro ao tentar Registrar o Usuário !!!');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Entre com o Nome"
                onChangeText={
                  (AnimalName) => setAnimalName(AnimalName)
                }
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Entre com o tipo de animal"
                onChangeText={
                  (TipoAnimal) => setTipoAnimal(TipoAnimal)
                }
                
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Entre com o gênero do Animal"
                onChangeText={
                  (AniGenero) => setAniGenero(AniGenero)
                }
                
                style={{padding: 10 }}
              />
              <Mytextinput
                placeholder="Entre com a raça do Animal"
                onChangeText={
                  (AniRaca) => setAniRaca(AniRaca)
                }
                
                style={{padding: 10 }}
              />
              <Mytextinput
                placeholder="Entre com a cor do Animal"
                onChangeText={
                  (AniCor) => setAniCor(AniCor)
                }
                
                style={{padding: 10 }}
              />
              <Mytextinput
                placeholder="Entre com as doenças do Animal (colocar '.' se não houver nenhuma)"
                onChangeText={
                  (AniDoenca) => setAniDoenca(AniDoenca)
                }
                
                style={{padding: 10 }}
              />
              <Mytextinput
                placeholder="Entre com as vacinas do Animal (colocar '.' se não houver nenhuma)"
                onChangeText={
                  (AniVacina) => setAniVacina(AniVacina)
                }
                
                style={{padding: 10 }}
              />
              <Mytextinput
                placeholder="Entre com a personalidade do Animal"
                onChangeText={
                  (AniPersonalidade) => setAniPersonalidade(AniPersonalidade)
                }
                
                style={{padding: 10 }}
              />
              <Mybutton title="Salvar" customClick={register_Animal} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterAnimal;