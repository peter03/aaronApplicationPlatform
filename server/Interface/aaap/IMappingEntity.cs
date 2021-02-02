/// ------------------------------
/// Please do NOT modify this file
/// ------------------------------
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace aaronApplicationPlatform.Interface
{
	/// <summary>
	/// Implementation for a mapping entity
	/// </summary>
	public interface IMappingEntity
	{
		Int32 SourceId
		{
			get;
			set;
		}
		Int32 TargetId
		{
			get;
			set;
		}

	}
}