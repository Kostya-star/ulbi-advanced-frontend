import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';
import { FC } from 'react';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  }

  return <Button className={classNames(cls.LangSwitcher, {}, [className])} theme={ThemeButton.CLEAR} onClick={switchLanguage}>
    {t('Language')}
  </Button>;
};