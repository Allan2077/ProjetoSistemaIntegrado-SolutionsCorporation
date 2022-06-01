import React from 'react';

export default function tabBar() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="Mensagens"
                    component={SettingsScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}