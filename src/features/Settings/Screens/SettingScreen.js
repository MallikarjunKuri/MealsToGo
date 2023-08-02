
import React, { useContext } from "react";
import styled, { useContext } from "styled-components"
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../Components/Utility/SafeAreaComponent";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { View } from "react-native";
import { Text } from "../../../Components/typography/text.component";



const SettingItem = styled(List.Item)`
padding:${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
    const { onLogout,user } = useContext(AuthenticationContext);
    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
                <View>
                    <Text variant="label">{user.email}</Text>
                </View>
                </AvatarContainer>
                    <List.Section>
                        <SettingsItem
                            title="Favourites"
                            description="View your favourites"
                            left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                            onPress={() => navigation.navigate("Favourites")}
                        />
                        <SettingItem

                            title="Logout"
                            left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                            onPress={onLogout}
                        />
                    </List.Section>

                </SafeArea>
                );
};

