import {Skeleton} from 'antd'

export const LoadingSkelton =()=>{
    return (
        <>
          <div className="flex flex-col p-2">
            <Skeleton.Input
              active={true}
              size="default"
              style={{ width: '100%' }}
            />
            <Skeleton.Input
              className="mt-3"
              active={true}
              size="default"
              style={{ width: '100%' }}
            />
            <Skeleton.Input
              className="mt-3"
              active={true}
              size="default"
              style={{ width: '100%' }}
            />
            <Skeleton.Input
              className="mt-3"
              active={true}
              size="default"
              style={{ width: '100%' }}
            />
          </div>
        </>
      );
}