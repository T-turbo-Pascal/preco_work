import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { Chip } from 'react-native-paper';

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState('Pondelok');
    const schedule = [
        {
            day: 'Pondelok',
            subject: 'Základy účtovníctva',
            teacher: 'Kajanová Jana doc. Ing. PhD.',
            time: '8:50 - 10:20',
            room: 'Učebňa/Room - 19',
            type: 'In-Person',
        },
        {
            day: 'Pondelok',
            subject: 'Mikroekonómia',
            teacher: 'Klapáčová Lucia Mgr.',
            time: '10:20 - 11:05',
            room: 'Učebňa/Room - 17',
            type: 'In-Person',
        },
        {
            day: 'Pondelok',
            subject: 'Informačné systémy a aplikačný softvér',
            teacher: 'Selecký Július Mgr. PhD.',
            time: '14:05 - 14:45',
            room: 'online10, online4, online28',
            type: 'In-Person',
        },
        {
            day: 'Pondelok',
            subject: 'Matematika II',
            teacher: 'Vechter Močarníková Katarína Mgr. PhD., Bučková Veronika Mgr',
            time: '14:50 - 15.35',
            room: 'online14, online18, online23',
            type: 'In-Person',
        },
        {
            day: 'Pondelok',
            subject: 'Matematika II+Aplikovaná matematika pre manažérov',
            teacher: 'Bohdalová Mária doc. RNDr. PhD.',
            time: '16:20 - 17:00',
            room: 'online5, online8, online26',
            type: 'In-Person',
        },


        {
            day: 'Streda',
            subject: 'Mikroekonómia',
            teacher: 'Stoličná Zuzana doc. Ing. PhD.',
            time: '11:50 - 12:30',
            room: 'online1, online3, online26',
            type: 'In-Person',
        },
        {
            day: 'Streda',
            subject: 'Základy účtovníctva',
            teacher: 'Kajanová Jana doc. Ing. PhD.',
            time: '14:05 - 14:45',
            room: 'online13, online6, online29',
            type: 'In-Person',
            image: 'https://i.pinimg.com/564x/eb/ee/d6/ebeed6762b24e21e17075a66a9b904db.jpg'
        },
        {
            day: 'Streda',
            subject: 'Manažment II',
            teacher: 'Copuš Lukáš doc. PhDr. PhD., Strážovská Ľubomíra doc. Ing. Mgr. PhD.',
            time: '15.35-16.20',
            room: 'online8, online6, online28',
            type: 'In-Person',
            image: 'https://i.pinimg.com/564x/51/9a/6a/519a6a8d9d59c37143455a5d150d5289.jpg'
        },
        {
            day: 'Streda',
            subject: 'účtovníctva',
            teacher: 'Veteška Lukáš Mgr.',
            time: '17.50-18.35',
            room: 'Učebňa/Room - 11',
            type: 'In-Person',
            image: 'https://i.pinimg.com/564x/16/47/54/164754241370f42b649840330f838893.jpg'
        },

        {
            day: 'Piatok',
            subject: 'Anglický jazyk pre manažérov',
            teacher: 'Brtková Jarmila Mgr.',
            time: '8.50-9.35',
            room: 'Učebňa/Room - 15',
            type: 'In-Person',
            image: 'https://i.pinimg.com/564x/65/13/76/651376125be704a92a9cbcd4741f7c0b.jpg'
        },
        {
            day: 'Piatok',
            subject: 'Informačné systémy a aplikačný softvér',
            teacher: 'Brtková Jarmila Mgr.  Selecký Július Mgr. PhD.',
            time: '10.20-11.05',
            room: 'Učebňa/Room - 18  Učebňa/Room - L4',
            type: 'In-Person',
            image: 'https://i.pinimg.com/564x/43/e1/2c/43e12ceb4c8e4364b467d21328645162.jpg'
        },
        {
            day: 'Piatok',
            subject: 'Manažment II',
            teacher: 'Strážovská Ľubomíra doc. Ing. Mgr. PhD.',
            time: '14.50-15.35',
            room: 'Učebňa/Room - 18',
            type: 'In-Person',
            image: 'https://i.pinimg.com/564x/51/9a/6a/519a6a8d9d59c37143455a5d150d5289.jpg'
        },
    ];

    const getScheduleForSelectedDay = (day) => {
        return schedule.filter((item) => item.day === day);
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                {['Pondelok', 'Streda', 'Piatok'].map((day) => (
                    <Chip
                        key={day}
                        mode="flat"
                        icon="calendar"
                        selected={selectedDay === day}
                        onPress={() => setSelectedDay(day)}
                        style={styles.button}
                    >
                        {day}
                    </Chip>
                ))}
            </View>
            <ScrollView style={styles.scrollView}>
                {getScheduleForSelectedDay(selectedDay).map((item) => (
                    <View style={styles.scheduleItem} key={item.subject}>
                        <Text style={styles.subject}>{item.subject}</Text>
                        <Text style={styles.teacher}>{item.teacher}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                        <Text style={styles.room}>{item.room}</Text>
                        <Text style={styles.type}>{item.type}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f2f2f2',
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 16,
    },
    button: {
        marginRight: 8,
        marginBottom: 8,
    },
    scrollView: {
        flex: 1,
    },
    scheduleItem: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    subject: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    teacher: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 8,
    },
    time: {
        fontSize: 16,
        marginBottom: 8,
    },
    room: {
        fontSize: 16,
        marginBottom: 8,
    },
    type: {
        fontSize: 16,
        marginBottom: 8,
    }
});

export default Schedule;