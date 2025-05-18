import React from "react";
import style from './ListFormat.module.css';

interface ListFormatProps {
    title: string;
    description?: string;
    date?: string;
    type?: string;
}

const ListFormat: React.FC<ListFormatProps> = ({title,description,date,type}) => {
    return (
            <div className={style.item}>
                <h4 className={style.listTitle}>{title}</h4>
                {description && <p>{description}</p>}
                {(date || type) && (
                    <div className={style.listMeta}>
                        {date && <p>{date}</p>}
                        {type && <p>Type: {type}</p>}
                    </div>
                )}
            <p><span>Select me for more details</span></p>
            </div>
    );
};

export default ListFormat;

