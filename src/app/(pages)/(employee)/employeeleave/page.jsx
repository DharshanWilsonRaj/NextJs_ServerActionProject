
import { getUser } from '@/app/utils';
import EmployeeleaveForm from './form/LeaveForm';


const Employeeleave = async () => {
    const data = await getUser()

    return (
        <div>
            <EmployeeleaveForm id={data?.id} />
        </div>
    )
}

export default Employeeleave
