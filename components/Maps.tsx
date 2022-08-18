import { YMaps, Map, Polygon, SearchControl } from 'react-yandex-maps';
import {Box, Typography} from "@mui/material";
import React, { useRef } from 'react'

const Maps = () => {
    return (
    <YMaps>
        <div style={{width: '80%', position: 'relative', margin: '100px 0 0 0'}}>
        <Box sx={{
                position: { md: 'absolute', xs: 'relative' },
                top: { md: '117px', xs: '0'},
                left: { md: '79px', xs: '0' },
                width: { md: '391px', xs: '100%' },
                height: 'auto',
                padding: {md: '29px 36px', xs: '10px 15px' },
                zIndex: { md: 999, xs: 0 },
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                margin: { md: '0 0 20px 0 ', xs: '100px auto 50px auto' },

            }}>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                }}>
                    <Box sx={{
                        padding: { md: '8px 26px', xs: '4px 16px' },
                        borderRadius: '20px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '19px',
                        lineHeight: '27px',
                        color: '#FFFFFF',
                        background: '#53B6FE',
                        width: { md: '128px', xs: '100px' },
                        textAlign: 'center',
                    }}>250 P</Box>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: { md: '20px', xs: '14px'},
                        lineHeight: '24px',
                        color: '#000000',
                    }}>Зона доставки - 1</Typography>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <Box sx={{
                        width: { md: '128px', xs: '98px' },
                        padding: { md: '8px 26px', xs: '4px 16px' },
                        borderRadius: '20px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '19px',
                        lineHeight: '27px',
                        color: '#FFFFFF',
                        background: '#7FFE53',
                        textAlign: 'center',
                    }}>500 P</Box>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: { md: '20px', xs: '14px'},
                        lineHeight: '24px',
                        color: '#000000',
                    }}>Зона доставки - 2</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <Box sx={{
                        width: { md: '128px', xs: '98px' },
                        padding: { md: '8px 26px', xs: '4px 16px' },
                        borderRadius: '20px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '19px',
                        lineHeight: '27px',
                        color: '#FFFFFF',
                        background: '#FDBD5A',
                        textAlign: 'center',
                    }}>750 P</Box>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: { md: '20px', xs: '14px'},
                        lineHeight: '24px',
                        color: '#000000',
                    }}>Зона доставки - 3</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{
                        width: { md: '128px', xs: '98px' },
                        padding: { md: '8px 26px', xs: '4px 16px' },
                        borderRadius: '20px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '19px',
                        lineHeight: '27px',
                        color: '#FFFFFF',
                        background: '#F27874',
                        textAlign: 'center',
                    }}>1000 P</Box>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: { md: '20px', xs: '14px'},
                        lineHeight: '24px',
                        color: '#000000',
                    }}>Зона доставки - 4</Typography>
                </div>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 0 300px 0', height: { xs:500, md: 605 }, marginBottom: "80px"}}>
                <Map width='100%' height='605' defaultState={{ center: [55.758493, 37.839271], zoom: 9, controls: [] }}>
                    <Polygon
                        geometry={[
                            [
                                [55.799348, 37.937095],
                                [55.724800, 37.932081],
                                [55.718512, 37.883466],
                                [55.705361, 37.881947],
                                [55.709231, 37.838998],
                                [55.743776, 37.752128],
                                [55.757583, 37.747397],
                                [55.798119, 37.749469],
                                [55.810710, 37.829094],
                            ],

                        ]}
                        options={{
                            fillColor: '#53B6FE',
                            strokeColor: '#42aaff',
                            opacity: 0.6,
                            strokeWidth: 3,
                            strokeStyle: 'solid',
                    }}/>
                    <Polygon
                        geometry={[
                        [
                            [55.666808, 37.876809],
                            [55.702947, 37.792329],
                            [55.722609, 37.698867],
                            [55.701363, 37.624883],
                            [55.750249, 37.617829],
                            [55.795320, 37.633630],
                            [55.886220, 37.716289],
                            [55.903861, 37.754294],
                            [55.910780, 37.935957],
                            [55.885480, 38.000912],
                            [55.753236, 38.099209],
                            [55.697305, 38.036273],
                        ],
                        [
                            [55.799348, 37.937095],
                            [55.724800, 37.932081],
                            [55.718512, 37.883466],
                            [55.705361, 37.881947],
                            [55.709231, 37.838998],
                            [55.743776, 37.752128],
                            [55.757583, 37.747397],
                            [55.798119, 37.749469],
                            [55.810710, 37.829094],
                        ],
                        ]}
                    options={{
                        fillColor: '#7FFE53',
                        strokeColor: '#008000',
                        opacity: 0.5,
                        strokeWidth: 3,
                        strokeStyle: 'solid',
                    }} />
                    <Polygon
                        geometry={[
                        [
                            [55.908434, 37.540855],
                            [55.950682, 37.821415],
                            [55.928470, 37.996498],
                            [55.876176, 38.212483],
                            [55.823875, 38.202571],
                            [55.727998, 38.263790],
                            [55.597478, 38.119803],
                            [55.547346, 37.773830],
                            [55.545045, 37.704022],
                            [55.568091, 37.666216],
                        ],
                        [
                            [55.666808, 37.876809],
                            [55.702947, 37.792329],
                            [55.722609, 37.698867],
                            [55.701363, 37.624883],
                            [55.750249, 37.617829],
                            [55.795320, 37.633630],
                            [55.886220, 37.716289],
                            [55.903861, 37.754294],
                            [55.910780, 37.935957],
                            [55.885480, 38.000912],
                            [55.753236, 38.099209],
                            [55.697305, 38.036273],
                        ],
                    ]}
                    options={{
                        fillColor: '#FDBD5A',
                        strokeColor: '#ffff00',
                        opacity: 0.4,
                        strokeWidth: 3,
                        strokeStyle: 'solid',
                    }} />
                    <Polygon
                        geometry={[
                        [
                            [56.147572, 37.987843],
                            [56.054191, 38.316427],
                            [55.968580, 38.475876],
                            [55.970603, 38.571633],
                            [55.836978, 38.625136],
                            [55.692030, 38.397370],
                            [55.563641, 38.465817],
                            [55.512179, 38.383398],
                            [55.456739, 38.378265],
                            [55.406437, 38.359085],
                            [55.373473, 38.051975],
                            [55.409819, 37.973554],
                            [55.372826, 37.841433],
                            [55.397741, 37.797419],
                            [55.467526, 37.817541],
                            [55.505649, 37.761625],
                            [55.606667, 37.700730],
                            [55.614411, 37.579792],
                            [55.660616, 37.505268],
                            [55.775873, 37.399436],
                            [55.851282, 37.411297],
                            [55.923252, 37.454925],
                            [55.955138, 37.550382],
                            [55.958425, 37.639874],
                            [55.980058, 37.735271],
                            [55.989787, 37.870623],
                        ],
                        [
                            [55.908434, 37.540855],
                            [55.950682, 37.821415],
                            [55.928470, 37.996498],
                            [55.876176, 38.212483],
                            [55.823875, 38.202571],
                            [55.727998, 38.263790],
                            [55.597478, 38.119803],
                            [55.547346, 37.773830],
                            [55.545045, 37.704022],
                            [55.568091, 37.666216],
                        ],

                    ]}
                    options={{
                        fillColor: '#F27874',
                        strokeColor: '#ff0000',
                        opacity: 0.3,
                        strokeWidth: 3,
                        strokeStyle: 'solid',
                    }} />
                </Map>
            </Box>
        </div>
    </YMaps>
)}

export default Maps