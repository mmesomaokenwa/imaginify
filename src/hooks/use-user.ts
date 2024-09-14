/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { getUserById } from "@/lib/actions/user.actions";
import { IUser } from "@/lib/database/models/user.model";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [data, setData] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        try {
          setIsLoading(true);
          const user = await getUserById(userId);
          setData(user);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchUser();
    }
  }, [userId])

  return { data, isLoading, error };
}