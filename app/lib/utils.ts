export function formatDate (dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }


  type WithDate = {
    date: string; // or Date if already parsed
  };
  
  /**
   * Sorts an array of items by date.
   * @param items Array of objects with a `date` field
   * @param order "desc" for newest first (default), "asc" for oldest first
   */
  export function sortByDate<T extends WithDate>(items: T[], order: 'asc' | 'desc' = 'desc'): T[] {
    return [...items].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return order === 'desc' ? dateB - dateA : dateA - dateB;
    });
  }
  
  export function getLatestDataByAsc<T extends WithDate>(data : T[]) {
    const sortedData = sortByDate(data, 'asc');
    if (sortedData.length >= 3) {
      return [sortedData[0], sortedData[1], sortedData[2]];
    }
    return sortedData;
  }

  function getDayWithSuffix(day: number): string {
    if (day >= 11 && day <= 13) return `${day}th`;
  
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1: return `${day}st`;
      case 2: return `${day}nd`;
      case 3: return `${day}rd`;
      default: return `${day}th`;
    }
  }
  
  export function formatDateWithSuffix(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const dayWithSuffix = getDayWithSuffix(day);
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
  
    return `${month} ${dayWithSuffix}, ${year}`;
  }