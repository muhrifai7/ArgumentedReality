import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import Gap from "../Gap"

const screenWidth = Math.round(Dimensions.get('window').width);


function Loading(data){
    console.log(data.length,'okekekeke')
    let renderIrem = [1,2,3,4,5].map((item, index) => {
        return (
            <SkeletonPlaceholder key={index}>
                <View style={{ alignItems: "center" }}>
                    <View style={{ width: screenWidth * 0.9, height: 100, borderRadius: 5 }} />
                    <Gap height={20}/>
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                        <View
                            style={{ marginTop: 6, width: 120, height: 20, borderRadius: 4 }}
                        />
                    </View>
                </View>
            </SkeletonPlaceholder>
        )
    })
    return renderIrem   
}


const SekelatonLoading = ({data}) => {
    return (
    <Loading data={data}/>
    );
}

export default SekelatonLoading;

const styes = StyleSheet.create({

})