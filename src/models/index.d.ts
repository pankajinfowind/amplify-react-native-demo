import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTestModal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestModal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestModal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestModal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestModal = LazyLoading extends LazyLoadingDisabled ? EagerTestModal : LazyTestModal

export declare const TestModal: (new (init: ModelInit<TestModal>) => TestModal) & {
  copyOf(source: TestModal, mutator: (draft: MutableModel<TestModal>) => MutableModel<TestModal> | void): TestModal;
}