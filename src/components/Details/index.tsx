import React from 'react';
import style from './Details.module.css';
import rawData from './detailsInfo.json'; // Adjust path if needed

// Step 1: Define types for each entry
interface WorkItem {
    title: string;
    location: string;
    date: string;
    responsibilities: string;
    skillsGained: string;
    appreciation: string;
}

interface AcademicItem {
    title: string;
    location: string;
    date: string;
    Description: string;
    courses: string;
    appreciation: string;
}

// Step 2: Create the shape of the entire data file
interface DataStructure {
    work: Record<string, WorkItem>;
    academics: Record<string, AcademicItem>;
    workTotal: number;
    academicsTotal: number;
}

// Step 3: Type the imported JSON
const data = rawData as DataStructure;

// Step 4: Define props for the component
interface DetailsProps {
    type: "work" | "academics",
    id: string,
}

// Step 5: The component
const Details: React.FC<DetailsProps> = ({type, id}) => {
    const item = data[type]?.[id];

    if (!item) return null;

    return (
        <div id="details" className={style.container}>
            <p>┌─────────────────────────────────────────────────────────────┐</p>
            <div className={style.content}>
                <p>│ <strong>Title:</strong> {item.title}</p>
                <p>│ <strong>Location:</strong> {item.location}</p>
                <p>│ <strong>Date:</strong> {item.date}</p>
            </div>
            <p>└─────────────────────────────────────────────────────────────┘</p>

            {type === 'work' && (
                <>
                    <p><strong>Responsibilities: </strong></p>
                    <ul>
                        {(item as WorkItem).responsibilities.split('\n').map((line, idx) => (
                            <li key={idx}><p>- {line}</p></li>
                        ))}
                    </ul>
                    <p><strong>Skills Gained:</strong> {(item as WorkItem).skillsGained}</p>
                </>
            )}

            {type === 'academics' && (
                <>
                    <p><strong>Description:</strong></p>
                    <p className={style.description}>{(item as AcademicItem).Description}</p>
                    <p><strong>Courses:</strong></p>
                    <ul>
                        {(item as AcademicItem).courses.split(',').map((course, idx) => (
                            <li key={idx}><p>- {course.trim()}</p></li>
                        ))}
                    </ul>
                </>
            )}

            <p> <strong>Appreciation: </strong>{item.appreciation}</p>

        </div>
    );
};

export default Details;
