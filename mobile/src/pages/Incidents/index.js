import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigationToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents() {
        if (loading) return;
        if (total > 0 && (incidents.length == total)) return;

        setLoading(true);

        //const response =  await api.get(`/incidents?page=${page}`);
        const response =  await api.get('/incidents', {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);

        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={incidents}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident.id)} //componente necessario de todas as listas
                showsVerticalScrollIndicator={false} //retira a barra de scroll vertical
                onEndReached={loadIncidents} //executado quando a lista acabar
                onEndReachedThreshold={0.2} //de 0 a 1, qunatos porcento do final para executar função da "onEndReached"
                renderItem={({ item:incident }) => (
                    <View style={styles.incident}>
                        <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <View>
                            <Text style={[styles.incidentProprety, {marginTop: 0}]}>ONG: </Text>
                                <Text style={[styles.incidentValue]}>{incident.name} de {incident.city}/{incident.uf}</Text>
                            </View>
                            <View style={[{flexDirection: 'row'}]}>
                                <Text style={[styles.incidentProprety, {marginTop: 0}]}>ID: </Text>
                                <Text style={[styles.incidentValue, {marginTop: 0}]}>{incident.id}</Text>
                            </View>
                        </View>

                        {/* <Text style={styles.incidentProprety}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text> */}

                        <Text style={styles.incidentProprety}>Caso:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProprety}>Valor:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigationToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}