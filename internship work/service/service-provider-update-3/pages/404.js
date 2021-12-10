import Image from 'next/image'
import { useRouter } from 'next/router';


export default function Custom404() {
    const router = useRouter(),
    goBack = () => router.back();

    return (
        <div className="custom-error-page">
            <div className="auto-width">
                <Image width={612} height={377} src="/under-construction.jpg" alt="logo"></Image>
                <h4 className="regular ant-btn ant-btn-link">
                    <span onClick={goBack}>
                        <span className="material-icons pull-left lh-20 mrn-10">arrow_back_ios</span>
                        <span className="material-icons pull-left lh-20">arrow_back_ios</span>
                        Take me back
                    </span>
                </h4>
            </div>
        </div>
    )
}