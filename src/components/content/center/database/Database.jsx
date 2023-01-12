import PieChart from "../../../common/PieChart"
import VerticalChart from "../../../common/VertivalChart"

const Database = () => {
    const general = {
        title: "General",
        groups: [
            {
                label: 'January',
                key: 0,
                dataset: {
                    set0: {
                        data: Math.random() * 1000,
                        color: "red"
                    },
                    set1: {
                        data: Math.random() * 1000,
                        color: "blue"
                    }
                }
            },
            {
                label: 'February', 
                key: 1, 
                dataset: {
                    set0: {
                        data: Math.random() * 1000,
                        color: "red"
                    },
                    set1: {
                        data: Math.random() * 1000,
                        color: "blue"
                    }
                }
            },
            {
                label: 'March', 
                key: 2, 
                dataset: {
                    set0: {
                        data: Math.random() * 1000,
                        color: "red"
                    },
                    set1: {
                        data: Math.random() * 1000,
                        color: "blue"
                    }
                }
            },
            {
                label: 'April', 
                key: 3, 
                dataset: {
                    set0: {
                        data: Math.random() * 1000,
                        color: "red"
                    },
                    set1: {
                        data: Math.random() * 1000,
                        color: "blue"
                    }
                }
            },
            {
                label: 'May', 
                key: 4, 
                dataset: {
                    set0: {
                        data: Math.random() * 1000,
                        color: "red"
                    },
                    set1: {
                        data: Math.random() * 1000,
                        color: "blue"
                    }
                }
            }
        ],
    }

    const labelingDatas = {
        title: "Labeling",
        groups: [
            {
                label: "Labeled",
                key: 0,
                data: 22,
                color: "red"
            },
            {
                label: "Unlabel",
                key: 0,
                data: 150,
                color: "blue"
            }

        ]
    }
    return (
        <>
            <VerticalChart data={general} />
            <PieChart data={labelingDatas} />
        </>
    )
}

export default Database