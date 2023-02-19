import { DarkLayout } from "@/components/layouts/DarkLayout";
import { MainLayout } from "@/components/layouts/MainLayout";



export default function AboutPage() {

    return ( 
        <h1>Este es el About Page</h1>
    )
}

AboutPage.getLayout = function getLayout( page ){

    return ( 
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )

} 