export interface Schedule {
  handle: string;
  type: string;
  onlineStoreUrl: string;
}

export interface GetScheduleQueryResponse {
  schedule: {
    metaobject: Schedule;
  };
}
