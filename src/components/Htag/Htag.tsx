import {HtagProps} from "./Htag.props";
import s from './Htag.module.scss';

export const Htag = ({tag, children}: HtagProps): JSX.Element => {
    const Tag = tag;
    return (<Tag className={s[tag]}>{children}</Tag>);
}

