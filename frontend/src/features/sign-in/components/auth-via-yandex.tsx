import { useEffect } from "react";
import { YandexAuthButtonStyled } from "../styled-components/yandex-auth-button.styled";

export const AuthViaYandex = () => {
  useEffect(() => {
    //@ts-ignore
    window.YaAuthSuggest.init(
      {
        client_id: "ab8514b93de5448c854b46d4bb2198cc",
        response_type: "token",
        redirect_uri: `${window.location.origin}/auth-succeed`
      },
      `${window.location.origin}`,
      {
        view: "button",
        parentId: "buttonContainerId",
        buttonSize: 'xxl',
        buttonView: 'main',
        buttonTheme: 'dark',
        buttonBorderRadius: "22",
        buttonIcon: 'ya',
      }
    )
      //@ts-ignore
      .then(({handler}) => handler())
      //@ts-ignore
      .then(data => console.log('Сообщение с токеном', data))
      //@ts-ignore
      .catch(error => console.log('Обработка ошибки', error))
  }, []);

  return (
    <YandexAuthButtonStyled id={'buttonContainerId'} />
  );
};
